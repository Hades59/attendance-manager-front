import { Component, OnInit } from '@angular/core';
import { Absence } from '../../shared/domain/absence'
import { AbsenceService } from '../../shared/service/absence.service';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-absence-visu',
  templateUrl: './absence-visu.component.html',
  styleUrls: ['./absence-visu.component.css']
})
export class AbsenceVisuComponent implements OnInit {

  absences: Absence[]

  constructor(private _absenceService : AbsenceService,private modalService: NgbModal) { 

  }

  ngOnInit() {
    this._absenceService.listerAbsence().subscribe(data => this.absences = data)
  }

  openAbsenceRequest(content){
    this.modalService.open(content).result.then((result) => {
      console.log(`Closed with: ${result}`)
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  openAbsenceDelete(contentDelete){
    this.modalService.open(contentDelete).result.then((result) => {
      console.log(`Closed with: ${result}`)
    }, (reason) => { 
      console.log(`Dismissed`);
    });
  }

}
