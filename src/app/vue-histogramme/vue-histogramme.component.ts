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

@Component({
  selector: 'app-vue-histogramme',
  templateUrl: './vue-histogramme.component.html',
  styleUrls: ['./vue-histogramme.component.css']
})
export class VueHistogrammeComponent implements OnInit {

  anneeTab: number[] = []
  moisTab: Date[] = []
  viewDate: Date = new Date();

  constructor() { }

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
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40]},
    {data: [28, 48, 40, 19, 86, 27, 90]}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
}
