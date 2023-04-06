import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLViewEmployeesComponent } from './tl-view-employees.component';

describe('TLViewEmployeesComponent', () => {
  let component: TLViewEmployeesComponent;
  let fixture: ComponentFixture<TLViewEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLViewEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLViewEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
