import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimChangePwdComponent } from './admim-change-pwd.component';

describe('AdmimChangePwdComponent', () => {
  let component: AdmimChangePwdComponent;
  let fixture: ComponentFixture<AdmimChangePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmimChangePwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmimChangePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
