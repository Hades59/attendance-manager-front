import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';
import {AbsenceService} from '../../shared/service/absence.service';
import {Absence} from '../../shared/domain/absence';



@Component({
  selector: 'app-absence-request',
  templateUrl: './absence-request.component.html',
  styleUrls: ['./absence-request.component.css']
})
export class AbsenceRequestComponent implements OnInit {

  @Input() absence:Absence;
  @Output() closeModal:EventEmitter<string> = new EventEmitter()
  
  constructor(private absenceService:AbsenceService) { }

  ngOnInit() {
  }

  validate(startDate,endDate,typeConge,motif,alert) {
    console.log("!"+startDate.value+"!");
    var mStartDate = moment(startDate.value).format("DD-MM-YYYY");
    var mEndDate =  moment(endDate.value).format("DD-MM-YYYY");

    var now = moment().add(1,'day').format("DD-MM-YYYY");

    if(startDate.value=="" || endDate.value==""){ 
      this.alertShow(alert,"Veuillez fournir les dates")
    }
    else if (now > mStartDate) {
    this.alertShow(alert,"La date de début ne peut pas être inférieur à la date du demain")
    }
    else if (mEndDate < mStartDate) {
      this.alertShow(alert,"La date de fin doit être supérieure ou égale à la date de début")
    }
    else if (typeConge.value == "CONGE_SANS_SOLDE" && motif.value=="") {
      this.alertShow(alert,"Le motif est obligatoire")
    }
    else {
      var absence = new Absence(startDate.value,endDate.value,motif.value, typeConge.value, "EN_ATTENTE_VALIDATION")
      var matricule = localStorage.getItem('matricule');
      matricule = "MAT01"
      this.absenceService.absenceAsk(matricule, absence)
      // close
      this.closeModal.emit('bye')
    }
  }
 

  cancel(){// TODO: Retour visualisation des demandes
    this.closeModal.emit('bye')    
 }

  private alertShow(alert,msg){
    alert.style.visibility = 'visible'
    alert.innerHTML = msg
    setTimeout(function(){alert.style.visibility = 'hidden'},8000);
  }
}
 