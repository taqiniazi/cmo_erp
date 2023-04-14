import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeIInformationComponent } from './search-employee-i-information.component';

describe('SearchEmployeeIInformationComponent', () => {
  let component: SearchEmployeeIInformationComponent;
  let fixture: ComponentFixture<SearchEmployeeIInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmployeeIInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployeeIInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
