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
  currentAbsence: Absence
  constructor(private _absenceService : AbsenceService,private modalService: NgbModal) { 

  }

  ngOnInit() {
    this._absenceService.listerAbsence().subscribe(data => this.absences = data)
  }

  openContent(content, absence){
    console.log(absence)
    this.currentAbsence = absence;
    const contentComponentInstance = this.modalService.open(content).componentInstance;
    //contentComponentInstance.absnece = absence;
/*
    let test = "{ resolve: {'foo': 'Foo value' } }"
    this.modalService.open(content, test );*/
   /* this.modalService.open(content,{
      resolve: {
          'foo': 'Foo value',
          '_bar': 5
      }  ).result.then((result) => {
      console.log(`Closed with: ${result}`)
    }, (reason) => {
      console.log(`Dismissed : ${reason}`);
    });
    }*/
  }
}
