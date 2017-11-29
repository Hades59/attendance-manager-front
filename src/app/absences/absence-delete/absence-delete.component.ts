import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {AbsenceService} from '../../shared/service/absence.service';
import {Absence} from '../../shared/domain/absence';

@Component({
  selector: 'app-absence-delete',
  templateUrl: './absence-delete.component.html',
  styleUrls: ['./absence-delete.component.css']
})
export class AbsenceDeleteComponent implements OnInit {

  constructor(private absenceService:AbsenceService) { }

  ngOnInit() {
    
  }

}
