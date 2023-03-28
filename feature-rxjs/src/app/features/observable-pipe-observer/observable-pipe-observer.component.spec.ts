import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePipeObserverComponent } from './observable-pipe-observer.component';

describe('ObservablePipeObserverComponent', () => {
  let component: ObservablePipeObserverComponent;
  let fixture: ComponentFixture<ObservablePipeObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablePipeObserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablePipeObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
