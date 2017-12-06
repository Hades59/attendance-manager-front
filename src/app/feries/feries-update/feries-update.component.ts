import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Ferie} from '../../shared/domain/feries'
import * as moment from 'moment';
import {FeriesService} from '../../shared/service/feries.service';

@Component({
  selector: 'app-feries-update',
  templateUrl: './feries-update.component.html',
  styleUrls: ['./feries-update.component.css']
})
export class FeriesUpdateComponent implements OnInit {

  @Input()
  ferie : Ferie;
  currentDay : string

  @Output() closeModal : EventEmitter<string> = new EventEmitter()
  
  constructor(private ferieService:FeriesService) { }

  ngOnInit() {
    this.currentDay = moment().add(1,'day').format("YYYY-MM-DD");
    
  }

  validate(pDateDay,pType,pCommentaire, alert){
    
        if(pDateDay.value==""){ 
          this.alertShow(alert,"Veuillez fournir une date")
        }
        else if (pType.value == "FERIE" && pCommentaire == "") {
          this.alertShow(alert,"Le commentaire est obligatoire pour les jours feriés")
        }
        else {
          let jf = new Ferie(new Date(pDateDay.value),
          pType.value,
          pCommentaire.value);
          jf.id = this.ferie.id
    
          
          this.ferieService.update(jf).subscribe(data => {
            this.ferieService.refreshList();        
            this.closeModal.emit('bye')
            
          })
      }   
      /* TODO : il est interdit de saisir un jour férié à la même date qu'un autre jour férié
      il est interdit de saisir une RTT employeur un samedi ou un dimanche
      Si une RTT employeur est créée alors le système créé une demande d'abence au statut INITIALE. Cette demande sera traitée lors du passage du batch de nuit.
      */
    
    }
    private alertShow(alert,msg){
      alert.style.visibility = 'visible'
      alert.innerHTML = msg
      setTimeout(function(){alert.style.visibility = 'hidden'},8000);
    }
}
