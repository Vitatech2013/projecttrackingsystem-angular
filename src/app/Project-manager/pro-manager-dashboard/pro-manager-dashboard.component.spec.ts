import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProManagerDashboardComponent } from './pro-manager-dashboard.component';

describe('ProManagerDashboardComponent', () => {
  let component: ProManagerDashboardComponent;
  let fixture: ComponentFixture<ProManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProManagerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
