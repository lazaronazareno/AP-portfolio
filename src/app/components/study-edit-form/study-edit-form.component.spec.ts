import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyEditFormComponent } from './study-edit-form.component';

describe('StudyEditFormComponent', () => {
  let component: StudyEditFormComponent;
  let fixture: ComponentFixture<StudyEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
