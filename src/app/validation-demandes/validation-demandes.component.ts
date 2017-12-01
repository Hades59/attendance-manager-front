import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../shared/service/absence.service';
import { Absence } from '../domain/absence';

@Component({
  selector: 'app-validation-demandes',
  templateUrl: './validation-demandes.component.html',
  styleUrls: ['./validation-demandes.component.css']
})
export class ValidationDemandesComponent implements OnInit {
  absences:Absence[] = []
  constructor(public absenceService: AbsenceService) { 
    this.absenceService.listerAbsenceParStatus("EN_ATTENTE_VALIDIDATION")
                        .subscribe(abs => {
                          this.absences = abs
                        });
  }

  ngOnInit() {
  }

  valid(absence:Absence){
    this.absenceService.validAbs(absence)
  }

  reject(absence:Absence){
    this.absenceService.rejectAbs(absence)
  }
}
