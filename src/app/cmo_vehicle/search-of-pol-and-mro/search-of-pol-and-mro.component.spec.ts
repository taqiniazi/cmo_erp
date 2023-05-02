import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfPolAndMroComponent } from './search-of-pol-and-mro.component';

describe('SearchOfPolAndMroComponent', () => {
  let component: SearchOfPolAndMroComponent;
  let fixture: ComponentFixture<SearchOfPolAndMroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOfPolAndMroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOfPolAndMroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
