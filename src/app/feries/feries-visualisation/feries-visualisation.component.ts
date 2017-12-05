import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Feries } from '../../shared/domain/feries';

@Component({
  selector: 'app-feries-visualisation',
  templateUrl: './feries-visualisation.component.html',
  styleUrls: ['./feries-visualisation.component.css']
})
export class FeriesVisualisationComponent implements OnInit {

  feries: Feries[]

  protected currentModal:NgbModalRef
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  closeModal(){
    this.currentModal.close();    
  }

  openContent(content){
  this.currentModal = this.modalService.open(content);
  }

}
