import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../shared/service/absence.service';

@Component({
  selector: 'app-validation-demandes',
  templateUrl: './validation-demandes.component.html',
  styleUrls: ['./validation-demandes.component.css']
})
export class ValidationDemandesComponent implements OnInit {

  constructor(public absenceService: AbsenceService) { 
    this.absenceService.listerAbsenceParStatus("EN_ATTENTE_VALIDIDATION").subscribe() }

  ngOnInit() {
  }

  /*valid(abscence:Abscence){
    this.'...'Service.validAbs(abscence)
  }
  reject(abscence:Abscence){
    this.'...'Service.rejectAbs(abscence)
  }
  */
}
