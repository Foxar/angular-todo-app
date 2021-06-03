import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.scss']
})
export class DateHeaderComponent implements OnInit {

  constructor() { }
  @Input() selectedDate!: Date;
  @Output() selectedDateChange = new EventEmitter<Date>();

  incDate(){this.changeDate(1);}
  decDate(){this.changeDate(-1);}

  changeDate(c: number){
    this.selectedDate.setDate(this.selectedDate.getDate() + c);
    this.selectedDateChange.emit(this.selectedDate);
  }

  ngOnInit(): void {
  }

}
