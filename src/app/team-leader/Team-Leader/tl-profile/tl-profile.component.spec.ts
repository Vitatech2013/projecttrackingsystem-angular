import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLProfileComponent } from './tl-profile.component';

describe('TLProfileComponent', () => {
  let component: TLProfileComponent;
  let fixture: ComponentFixture<TLProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
