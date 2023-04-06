import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmViewEmployeeComponent } from './pm-view-employee.component';

describe('PmViewEmployeeComponent', () => {
  let component: PmViewEmployeeComponent;
  let fixture: ComponentFixture<PmViewEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmViewEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmViewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
