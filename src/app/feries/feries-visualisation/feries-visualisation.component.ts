import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { Ferie } from '../../shared/domain/feries';
import {FeriesService } from '../../shared/service/feries.service'
// tous les date seront en français
registerLocaleData(localeFr);

@Component({
  selector: 'app-feries-visualisation',
  templateUrl: './feries-visualisation.component.html',
  styleUrls: ['./feries-visualisation.component.css']
})
export class FeriesVisualisationComponent implements OnInit {

  protected currentModal:NgbModalRef
  feries: Ferie[] = []
  
  constructor(private modalService: NgbModal, private ferieService:FeriesService) { }

  ngOnInit() {
    this.ferieService.listerFeries().subscribe(lst => this.feries = lst)
    console.log(this.feries);
    
  }

  closeModal(){
    this.currentModal.close();    
  }

  openContent(content){
  this.currentModal = this.modalService.open(content);
  }

}
