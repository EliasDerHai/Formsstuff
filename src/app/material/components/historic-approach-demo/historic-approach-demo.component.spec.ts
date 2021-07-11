import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoricApproachDemoComponent} from './historic-approach-demo.component';

describe('HistoricApproachDemoComponent', () => {
  let component: HistoricApproachDemoComponent;
  let fixture: ComponentFixture<HistoricApproachDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricApproachDemoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricApproachDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
