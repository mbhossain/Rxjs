import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get(apiUrl).pipe(
      map(response => response),
      catchError(error => of(`Error: ${error}`))
    );
  }
}
