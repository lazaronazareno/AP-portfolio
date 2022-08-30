import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksFormComponent } from './works-form.component';

describe('WorksFormComponent', () => {
  let component: WorksFormComponent;
  let fixture: ComponentFixture<WorksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
