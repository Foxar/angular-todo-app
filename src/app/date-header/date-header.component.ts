import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.scss']
})
export class DateHeaderComponent {

  constructor() { }
  @Input() selectedDate!: Date;
  @Output() selectedDateChange = new EventEmitter<Date>();

  incDate(){this.changeDate(1);}
  decDate(){this.changeDate(-1);}

  changeDate(c: number){
    console.log("Changing date");
    const newDate = new Date()
    newDate.setDate(this.selectedDate.getDate() + c);
    this.selectedDate = newDate;
    this.selectedDateChange.emit(this.selectedDate);
  }

}
