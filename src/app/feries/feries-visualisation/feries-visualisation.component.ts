import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feries-visualisation',
  templateUrl: './feries-visualisation.component.html',
  styleUrls: ['./feries-visualisation.component.css']
})
export class FeriesVisualisationComponent implements OnInit {

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
