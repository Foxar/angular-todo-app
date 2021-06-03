import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-menu',
  templateUrl: './task-menu.component.html',
  styleUrls: ['./task-menu.component.scss']
})
export class TaskMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    console.log("Placeholder behavior for delete button");
  }

}
