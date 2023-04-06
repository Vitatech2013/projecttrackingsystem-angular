import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLViewtaskComponent } from './tl-viewtask.component';

describe('TLViewtaskComponent', () => {
  let component: TLViewtaskComponent;
  let fixture: ComponentFixture<TLViewtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLViewtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
