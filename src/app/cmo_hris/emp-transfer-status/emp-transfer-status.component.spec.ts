import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTransferStatusComponent } from './emp-transfer-status.component';

describe('EmpTransferStatusComponent', () => {
  let component: EmpTransferStatusComponent;
  let fixture: ComponentFixture<EmpTransferStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpTransferStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTransferStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
