import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BookDBService} from '../services/bookDB.service';

export interface filmDetail {
  film_id: number;
  title: string;
  rating: string;
}

@Component({
  selector: 'app-finditem',
  templateUrl: './finditem.component.html',
  styleUrls: ['./finditem.component.css']
})
export class FinditemComponent implements OnInit {

  item={};

  @Output()
  // albumAdded = new EventEmitter<string>();
  itemList = new EventEmitter();

  constructor(private bookdbsvc: BookDBService) { }

  ngOnInit() {

  }

  searchItem(form: NgForm) {
    const title = "%"+form.value.title+"%";
    const author = "%"+form.value.author+"%";
    const limit = form.value.limit;


    this.bookdbsvc.getItem("0",limit,title,author)
    .then((results)=>{
      this.item = results;
    })

    console.log(">>>>>", limit);
    
    this.itemList.emit(this.item);
      
    console.log("*Loggin this  ", this.item);
  }
}
