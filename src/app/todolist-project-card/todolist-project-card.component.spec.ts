import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistProjectCardComponent } from './todolist-project-card.component';

describe('TodolistProjectCardComponent', () => {
  let component: TodolistProjectCardComponent;
  let fixture: ComponentFixture<TodolistProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistProjectCardComponent]
    });
    fixture = TestBed.createComponent(TodolistProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
