import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLDashboardComponent } from './tl-dashboard.component';

describe('TLDashboardComponent', () => {
  let component: TLDashboardComponent;
  let fixture: ComponentFixture<TLDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
