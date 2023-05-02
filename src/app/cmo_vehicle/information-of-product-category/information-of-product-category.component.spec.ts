import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOfProductCategoryComponent } from './information-of-product-category.component';

describe('InformationOfProductCategoryComponent', () => {
  let component: InformationOfProductCategoryComponent;
  let fixture: ComponentFixture<InformationOfProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationOfProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationOfProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
