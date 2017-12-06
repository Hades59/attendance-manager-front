import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import {FeriesService} from '../../shared/service/feries.service';
import {Ferie} from '../../shared/domain/feries';

@Component({
  selector: 'app-feries-delete',
  templateUrl: './feries-delete.component.html',
  styleUrls: ['./feries-delete.component.css']
})
export class FeriesDeleteComponent implements OnInit {

  constructor(private feriesService:FeriesService) { }

  @Input() ferie:Ferie;
  @Output() closeModal:EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  delete(ferie: Ferie){
    //var date = localStorage.getDate('date');
    //date = 'date' 

    this.feriesService.ferieDelete(ferie);
    this.closeModal.emit('bye')
    
  }

  cancel(){
    this.closeModal.emit('bye')
  }

}
