import { Component, 
         ChangeDetectionStrategy,
         ViewChild,
         TemplateRef } from '@angular/core';
import { startOfDay,
         endOfDay,
         subDays,
         addDays,
         endOfMonth,
         isSameDay,
         isSameMonth,
         addHours } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,
         CalendarEventAction,
         CalendarEventTimesChangedEvent } from 'angular-calendar';
import { AbsenceService } from '../shared/service/absence.service';
import { Subject} from 'rxjs/Subject';
import { Observable} from 'rxjs/Observable';

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
  selector: 'app-planning-abs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './planning-abs.component.html',
  styleUrls: ['./planning-abs.component.css']
})
export class PlanningAbsComponent {

  //@ViewChild('modalContent') modalContent: TemplateRef<any>; //permet de voir constit code
  
  view: string = 'month';
  
  viewDate: Date = new Date();
  
  modalData: {
    action: string;
    event: CalendarEvent;
  };
      
/*
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    }
  ];*/

  refresh: Subject<CalendarEvent[]> = new Subject();
  events: Observable<CalendarEvent[]> /* [{
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'Congé payé',  //absence.nom + absence.type
    color: colors.red
  }];*/

  events2 : CalendarEvent[] = []

  activeDayIsOpen: boolean = true;

  constructor(public absenceService: AbsenceService) { 
    this.events = this.refresh.asObservable()
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
                
      let type = abs.type

      if(type != 'RTT'){
        type = type.replace(/_/g, ' ').toLowerCase()
        
        type = type.replace(type.charAt(0), type.charAt(0).toUpperCase())
      }
      
      let event : CalendarEvent = {
        "start": new Date(abs.beginDate),
        "end": new Date(abs.endDate),
        "title": type+": "+abs.id,  //absence.nom + absence.type
        "color": color
      }
      
      console.log(event)
      this.events2.push(event);
      this.refresh.next(this.events2)
     // this.events.push(event);

    }));


  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  /*eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }*/
/*
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }*/

 /* addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }*/

}
