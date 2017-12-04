import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FeriesService} from '../../shared/service/feries.service';
import * as moment from 'moment';

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

  validate(pDateDay){

    if(pDateDay.value==""){ 
      this.alertShow(alert,"Veuillez fournir une date")
    }
    else if (pDateDay.value == "JF") {
      this.alertShow(alert,"Le commentaire est obligatoire pour les jours feriés")
    }
    /* TODO : il est interdit de saisir un jour férié à la même date qu'un autre jour férié
    il est interdit de saisir une RTT employeur un samedi ou un dimanche
    Si une RTT employeur est créée alors le système créé une demande d'abence au statut INITIALE. Cette demande sera traitée lors du passage du batch de nuit.
    */
    else {
      var matricule = localStorage.getItem('matricule');
      matricule = "MAT01"
      this.ferieService.listerFeries().subscribe()
      
      this.closeModal.emit('bye')
  }
}

  private alertShow(alert,msg){
    alert.style.visibility = 'visible'
    alert.innerHTML = msg
    setTimeout(function(){alert.style.visibility = 'hidden'},8000);
  }
}
