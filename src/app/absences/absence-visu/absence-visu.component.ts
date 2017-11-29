import { Component, OnInit } from '@angular/core';
import { Absence } from '../../shared/domain/absence'
import { AbsenceService } from '../../shared/service/absence.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-absence-visu',
  templateUrl: './absence-visu.component.html',
  styleUrls: ['./absence-visu.component.css']
})
export class AbsenceVisuComponent implements OnInit {

  absences: Absence[]

  constructor(private _absenceService : AbsenceService) { 

  }

  ngOnInit() {
    this._absenceService.listerAbsence().subscribe(data => this.absences = data)
  }

}
