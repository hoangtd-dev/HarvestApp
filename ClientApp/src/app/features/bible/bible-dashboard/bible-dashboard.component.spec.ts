import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleDashboardComponent } from './bible-dashboard.component';

describe('BibleDashboardComponent', () => {
  let component: BibleDashboardComponent;
  let fixture: ComponentFixture<BibleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
