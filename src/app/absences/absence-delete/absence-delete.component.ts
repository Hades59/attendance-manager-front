import { Component, OnInit, Input } from '@angular/core';
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

  @Input() absence:Absence;

  ngOnInit() {

  }


  delete(){
    var matricule = localStorage.getItem('matricule');// le matricule est normalement stocké dans le locale storage après cnx
    matricule = "MAT01" //#####################################################################################################

    this.absenceService.absenceDelete(matricule,this.absence);
  }


  // TODO : 
  cancel(){

  }

  

}
