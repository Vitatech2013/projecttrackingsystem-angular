import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLAddtaskComponent } from './tl-addtask.component';

describe('TLAddtaskComponent', () => {
  let component: TLAddtaskComponent;
  let fixture: ComponentFixture<TLAddtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLAddtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLAddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
