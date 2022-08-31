import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEditFormComponent } from './work-edit-form.component';

describe('WorkEditFormComponent', () => {
  let component: WorkEditFormComponent;
  let fixture: ComponentFixture<WorkEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
