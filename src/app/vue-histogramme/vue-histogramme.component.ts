import { Component, OnInit,  } from '@angular/core';
import { startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours } from 'date-fns';
import { DatePipe } from '@angular/common';
import { AbsenceService } from '../shared/service/absence.service';
import { Subject } from 'rxjs/Subject';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  purple: {
    primary: '##ad2095',
    secondary: '#ff2bda'
  }
 };

@Component({
  selector: 'app-vue-histogramme',
  templateUrl: './vue-histogramme.component.html',
  styleUrls: ['./vue-histogramme.component.css']
})
export class VueHistogrammeComponent implements OnInit {

  anneeTab: number[] = []
  moisTab: Date[] = []
  viewDate: Date = new Date();


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40]},
    {data: [28, 48, 40, 19, 86, 27, 90]}
  ];

  constructor(public absenceService: AbsenceService) { 
    this.absenceService.listerAbsenceParStatus("VALIDEE")
                        .subscribe(absences => absences.forEach(abs => {
      
            let color : any = colors.purple;
            if (abs.type=='RTT'){
              color=colors.yellow;
            }
            if (abs.type=='CONGE_PAYE'){
              color=colors.blue;
            } 
            if (abs.type=='CONGE_SANS_SOLDE'){
              color=colors.red;
            }
          }))                  
   }

  ngOnInit() {
    let today: Date = new Date();
    let annee = today.getFullYear()
    for (let i=0; i<5; i++){
      this.anneeTab.push(annee);
      annee--;
    }
    let mois = today.getMonth()
    for (let i=0; i<12; i++){
      this.moisTab.push(new Date(annee, i));
   
    }
    console.log(this.moisTab)
    this.barChartLabels = this.moisTab.map(m => ''+m.getDay());
  }

 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
}
