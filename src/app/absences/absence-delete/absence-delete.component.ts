import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() closeModal:EventEmitter<string> = new EventEmitter()
  
  ngOnInit() {

  }


  delete(absence: Absence){
    var matricule = localStorage.getItem('matricule');// le matricule est normalement stocké dans le locale storage après cnx
    matricule = "MAT01" //#####################################################################################################

    this.absenceService.absenceDelete(matricule, absence);
    this.closeModal.emit('bye')
    
  }


  // TODO : 
  cancel(){

    this.closeModal.emit('bye')
  }

  

}
