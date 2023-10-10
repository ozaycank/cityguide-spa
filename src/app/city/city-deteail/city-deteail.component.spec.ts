/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityDeteailComponent } from './city-deteail.component';

describe('CityDeteailComponent', () => {
  let component: CityDeteailComponent;
  let fixture: ComponentFixture<CityDeteailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDeteailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDeteailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
