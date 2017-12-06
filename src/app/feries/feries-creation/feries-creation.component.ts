import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FeriesService} from '../../shared/service/feries.service';
import * as moment from 'moment';
import {Ferie} from '../../shared/domain/feries';


@Component({
  selector: 'app-feries-creation',
  templateUrl: './feries-creation.component.html',
  styleUrls: ['./feries-creation.component.css']
})
export class FeriesCreationComponent implements OnInit {

  @Output() closeModal:EventEmitter<string> = new EventEmitter()
  currentDay : string

  constructor(private ferieService:FeriesService) { }

  ngOnInit() {
    //La date de début ne peut pas correspondre au jour d'aujourd'hui 
    this.currentDay = moment().add(1,'day').format("YYYY-MM-DD");
  }

  cancel(){
    this.closeModal.emit('bye')    
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

      
      this.ferieService.create(jf).subscribe(data => {
        this.ferieService.refreshList();        
        this.closeModal.emit('bye')
        
      }, error => {
        this.alertShow(alert, "Existe déjà dans la base") 
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
