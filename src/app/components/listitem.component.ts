import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, } from '@angular/material';


export interface BookData{
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  activate: string;
}



@Component({
    selector: 'app-listitem',
    templateUrl: './listitem.component.html',
    styleUrls: ['./listitem.component.css']
  })

export class ListitemComponent implements OnInit {

  displayCols = ['id', 'title', 'firstname', 'lastname'];
  datasource : MatTableDataSource <BookData>;

  @Input()
  passResult : BookData[];
  itemResult : [];
  

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  
  class MyDataSource<bookDBSvc> extends DataSource<bookDBSvc> {
    constructor(private observable: Observable<bookDBSvc[]>) {}
    connect () {
          return this.observable;
    }
}

  ngOnInit() {

    this.dataSource = new MyDataSource(this.db.list('sellEntries').valueChanges());
} 

// Component: 
dataSource: MyDataSource<any>;
ngOnInit() {
    this.dataSource = new MyDataSource(this.db.list('sellEntries').valueChanges());
}
   
    refreshData(this.itemResult) {
      console.log (">>> Display items Found: ", this.itemResult);     

    this.itemResult=Object.values(this.itemResult);

    console.log(">> this.itemResult<< ", this.itemResult);
    }

    this.datasource.data = this.passResult;
    console.log("BookData data>>>>>>>", this.passResult);
    this.datasource.sort = this.sort;

    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
      
  applyFilter(filterValue: string) {
      this.datasource.filter = filterValue.trim().toLowerCase();
      if (this.datasource.paginator) {
        this.datasource.paginator.firstPage();
      }
  }


  ngAfterViewInit() {

  }

/*  refreshData(itemList: any) {
    console.log (">>> Display items Found: ", itemList);     

    this.itemResult=Object.values(itemList);

    console.log(">> this.itemResult<< ", this.itemResult);
    }
*/  
}