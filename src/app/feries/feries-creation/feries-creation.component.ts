import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-feries-creation',
  templateUrl: './feries-creation.component.html',
  styleUrls: ['./feries-creation.component.css']
})
export class FeriesCreationComponent implements OnInit {

  @Output() closeModal:EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.closeModal.emit('bye')
  }

  validate(){
    this.closeModal.emit('bye')
    
  }

}
