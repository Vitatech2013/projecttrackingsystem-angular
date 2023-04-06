import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmViewProjectComponent } from './pm-view-project.component';

describe('PmViewProjectComponent', () => {
  let component: PmViewProjectComponent;
  let fixture: ComponentFixture<PmViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmViewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
