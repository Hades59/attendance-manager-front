import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
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
  currentFerie : Ferie
  
  constructor(private modalService: NgbModal, private ferieService:FeriesService) { }

  ngOnInit() {
    this.ferieService.listerFeries().subscribe(lst => this.feries = lst) 
  }

  closeModal(){
    this.currentModal.close();    
  }

  openContent(content){
  this.currentModal = this.modalService.open(content);
  }
  openContentDelete(content,j){
    console.log(j);
    
    this.currentFerie = j
    this.openContent(content)
  }

}
