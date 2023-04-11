import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevViewtaskComponent } from './dev-viewtask.component';

describe('DevViewtaskComponent', () => {
  let component: DevViewtaskComponent;
  let fixture: ComponentFixture<DevViewtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevViewtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
