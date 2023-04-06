import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLViewModulesComponent } from './tl-view-modules.component';

describe('TLViewModulesComponent', () => {
  let component: TLViewModulesComponent;
  let fixture: ComponentFixture<TLViewModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLViewModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLViewModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
