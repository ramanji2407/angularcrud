import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDilogComponent } from './product-dilog.component';

describe('ProductDilogComponent', () => {
  let component: ProductDilogComponent;
  let fixture: ComponentFixture<ProductDilogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDilogComponent]
    });
    fixture = TestBed.createComponent(ProductDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
