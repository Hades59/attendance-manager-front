import { Component, OnInit } from '@angular/core';
import { Absence } from '../../shared/domain/absence'
import { AbsenceService } from '../../shared/service/absence.service';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons,NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-absence-visu',
  templateUrl: './absence-visu.component.html',
  styleUrls: ['./absence-visu.component.css']
})
export class AbsenceVisuComponent implements OnInit {

  absences: Absence[]
  currentAbsence : Absence
  protected currentModal:NgbModalRef
  
  constructor(private _absenceService : AbsenceService, private modalService: NgbModal) { 

  }

  ngOnInit() {
    this._absenceService.listerAbsence().subscribe(data => this.absences = data)
  }

  openContent(content, absence){
    this.currentAbsence = absence;
    this.currentModal = this.modalService.open(content);
  }

  closeModal() {
    this.currentModal.close();
    
  }
}
