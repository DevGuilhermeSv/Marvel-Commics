/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommicsComponent } from './Commics.component';

describe('CommicsComponent', () => {
  let component: CommicsComponent;
  let fixture: ComponentFixture<CommicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
