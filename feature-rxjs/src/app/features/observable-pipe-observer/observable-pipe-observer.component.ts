import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, map, pluck, take } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-observable-pipe-observer',
  templateUrl: './observable-pipe-observer.component.html',
  styleUrls: ['./observable-pipe-observer.component.css']
})
export class ObservablePipeObserverComponent implements OnInit {
  users = {
    data: [
      {
        id: 1,
        status: "active",
        age: 14,
      },
      {
        id: 1,
        status: "inactive",
        age: 12,
      },
      {
        id: 1,
        status: "active",
        age: 42,
      },
      {
        id: 1,
        status: "inactive",
        age: 42,
      },
      {
        id: 1,
        status: "active",
        age: 13,
      },
      {
        id: 1,
        status: "inactive",
        age: 75,
      },
      {
        id: 1,
        status: "inactive",
        age: 43,
      },
      {
        id: 1,
        status: "inactive",
        age: 54,
      },
      {
        id: 1,
        status: "active",
        age: 7,
      },
      {
        id: 1,
        status: "active",
        age: 17,
      },
    ],
  };

  constructor(
    private data_service: DataService
  ) { }

  ngOnInit(): void { this.getData() }


  observable_case01: any;
  observable_case02: any;
  observable_case03: any;
  getData() {
    /* case01
       create an Observable that emits users data
    */
    const observable_case01 = new Observable(subscriber => {
      subscriber.next(this.users);
      subscriber.complete();
    });

    /*
     subscribe to the Observable and log each emitted value
     */
    observable_case01.subscribe({
      next: value => this.observable_case01 = value,
      error: err => console.log('err:', err),
      complete: () => console.log('Observable complete')
    });

    /*
    case02
     create an Observable that emits a sequence of numbers every second
     */

    const observable_case02 = interval(1000).pipe(
      take(5) // emit only the first 5 values
    );

    /*
     subscribe to the Observable and log each emitted value
     */
    observable_case02.subscribe({
      next: value => this.observable_case02 = value,
      complete: () => console.log('Observable complete')
    });

    /*
    case02
     */

    this.data_service.getData().subscribe(res => {
      this.observable_case03 = res;
    })



  }

}
