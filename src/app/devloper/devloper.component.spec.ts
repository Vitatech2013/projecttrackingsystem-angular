import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloperComponent } from './devloper.component';

describe('DevloperComponent', () => {
  let component: DevloperComponent;
  let fixture: ComponentFixture<DevloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
