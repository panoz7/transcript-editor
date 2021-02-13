import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimesComponent } from './set-times.component';

describe('SetTimesComponent', () => {
  let component: SetTimesComponent;
  let fixture: ComponentFixture<SetTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
