import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import {AbsenceService} from '../../shared/service/absence.service'
import {Absence} from '../../shared/domain/absence'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-absence-update',
  templateUrl: './absence-update.component.html',
  styleUrls: ['./absence-update.component.css']
})
export class AbsenceUpdateComponent implements OnInit {

  constructor(private absenceService:AbsenceService) { }

  @Input() absence:Absence;

  @Output() closeModal:EventEmitter<string> = new EventEmitter()

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

      this.absenceService.absenceUpdate(matricule,this.absence)
      this.closeModal.emit('bye')
      
  }
}

  cancel(){
    this.closeModal.emit('bye')
      }

  private alertShow(alert,msg){
    alert.style.visibility = 'visible'
    alert.innerHTML = msg  
    setTimeout(function(){alert.style.visibility = 'hidden'},8000);
  }

  
}
