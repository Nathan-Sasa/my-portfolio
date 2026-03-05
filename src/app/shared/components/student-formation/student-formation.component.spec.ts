import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormationComponent } from './student-formation.component';

describe('StudentFormationComponent', () => {
  let component: StudentFormationComponent;
  let fixture: ComponentFixture<StudentFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
