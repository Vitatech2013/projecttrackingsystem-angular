import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProManagerLoginComponent } from './pro-manager-login.component';

describe('ProManagerLoginComponent', () => {
  let component: ProManagerLoginComponent;
  let fixture: ComponentFixture<ProManagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProManagerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
