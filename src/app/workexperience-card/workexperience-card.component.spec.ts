import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperienceCardComponent } from './workexperience-card.component';

describe('WorkexperienceCardComponent', () => {
  let component: WorkexperienceCardComponent;
  let fixture: ComponentFixture<WorkexperienceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkexperienceCardComponent]
    });
    fixture = TestBed.createComponent(WorkexperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
