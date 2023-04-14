import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HajjBallotingComponent } from './hajj-balloting.component';

describe('HajjBallotingComponent', () => {
  let component: HajjBallotingComponent;
  let fixture: ComponentFixture<HajjBallotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HajjBallotingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HajjBallotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
