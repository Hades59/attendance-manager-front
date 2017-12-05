import { Component } from '@angular/core';
import { Absence } from './shared/domain/absence';
import { AbsenceService } from './shared/service/absence.service';
import { Ferie } from './shared/domain/feries';
import { FeriesService } from './shared/service/feries.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AbsenceService, FeriesService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _absenceService: AbsenceService, private_feriesService: FeriesService) {
  }



  ngOnInit() {
  }

}




