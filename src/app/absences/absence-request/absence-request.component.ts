import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import {AbsenceService} from '../../service/absence-service.service'
import {Absence} from '../../domain/absence'


@Component({
  selector: 'app-absence-request',
  templateUrl: './absence-request.component.html',
  styleUrls: ['./absence-request.component.css']
})
export class AbsenceRequestComponent implements OnInit {

  constructor(private absenceService:AbsenceService) { }

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
    else{// TODO : Send to server with state 'INITIALE'
      var absence = new Absence(startDate.value,endDate.value,typeConge.value,motif.value)
      var matricule = localStorage.getItem('matricule');// le matricule est normalement stocké dans le locale storage après cnx
      matricule = "MAT01" //#####################################################################################################
      this.absenceService.askAbsence(matricule,absence)
      
  }


//TODO !! il est interdit de faire une demande qui chevauche une demande existante, sauf si cette dernière est rejetée.

  }

 
  cancel(){// TODO: Retour visualisation des demandes

  }

  private alertShow(alert,msg){
    alert.style.visibility = 'visible'
    alert.innerHTML = msg  
    setTimeout(function(){alert.style.visibility = 'hidden'},8000);
  }
}
