import { Component, EventEmitter, Output, Input,ViewChild } from '@angular/core';


export interface itemList {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Library Client';
  itemResult:string[];

  myItemList: itemList[];

  @Input()
  item: any;

  @Output()
  activate = new EventEmitter();

    }

