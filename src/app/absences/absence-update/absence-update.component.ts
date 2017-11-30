import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import {AbsenceService} from '../../shared/service/absence.service'
import {Absence} from '../../shared/domain/absence'
@Component({
  selector: 'app-absence-update',
  templateUrl: './absence-update.component.html',
  styleUrls: ['./absence-update.component.css']
})
export class AbsenceUpdateComponent implements OnInit {

  constructor(private absenceService:AbsenceService) { }

  @Input() absence:Absence;

  ngOnInit() {
    
  }

  validate(startDate,endDate,typeConge,motif,alert) {
    console.log("!"+startDate.value+"!");
    var mStartDate = moment(startDate.value).format("DD-MM-YYYY");
    var mEndDate =  moment(endDate.value).format("DD-MM-YYYY");
    // TODO : Les dates doivent etre fournis
  
    //TODO: une demande d'absence débute au plus tôt à partir de J+1
    var now = moment().add(1,'day').format("DD-MM-YYYY");

    if(startDate.value=="" || endDate.value==""){
      this.alertShow(alert,"Veuillez fournir les dates")
    }
    else if (now > mStartDate) {
    this.alertShow(alert,"La date de début ne peut pas être inférieur à la date du demain")
    }
    //TODO: la date de fin est supérieure ou égale à la date de début
    else if (mEndDate < mStartDate) {
    this.alertShow(alert,"La date de fin doit être supérieure ou égale à la date de début")
    }
    // TODO: le motif n'est obligatoire que si le type de demande est congés sans solde
    else if(typeConge.value == "Congé sans solde" && motif.value==""){
    this.alertShow(alert,"Le motif est obligatoire")
    }
    else{
      this.absence.beginDate = startDate.value
      this.absence.endDate = endDate.value
      this.absence.type = typeConge.value
      this.absence.motif = motif.value
      var matricule = localStorage.getItem('matricule');// le matricule est normalement stocké dans le locale storage après cnx
      matricule = "MAT01" //#####################################################################################################

      // UPDATE
      this.absenceService.absenceUpdate(matricule,this.absence)
      
  }
}

  cancel(){// TODO: Retour visualisation des demandes
    
      }

  private alertShow(alert,msg){
    alert.style.visibility = 'visible'
    alert.innerHTML = msg  
    setTimeout(function(){alert.style.visibility = 'hidden'},8000);
  }

}
