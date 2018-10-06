import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BookDBService {

  constructor(private http: HttpClient) { }

  getItem(offset = "0", limit = "50", title, author) : Promise<any> {

    const qs = new HttpParams()
      .set('offset' , offset)
      .set('limit' , limit)
      .set('title', title)
      .set('author', author);
    return (
      this.http.get('http://localhost:3000/booklist',{params:qs})
        .pipe(take(1)).toPromise()
    );

  }
}
