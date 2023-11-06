import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswordResetComponent } from './pasword-reset.component';

describe('PaswordResetComponent', () => {
  let component: PaswordResetComponent;
  let fixture: ComponentFixture<PaswordResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaswordResetComponent]
    });
    fixture = TestBed.createComponent(PaswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
