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
  

 
  propagateList(item: any) {
    console.log (">>> Items Found: ", item);     

    this.itemResult=Object.values(item);

    console.log(">> this.itemResult<< ", this.itemResult);

    this.activate.emit(this.itemResult);

  //  return this.filmResult;
    }

}
