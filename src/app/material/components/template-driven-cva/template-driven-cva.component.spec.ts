import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateDrivenCvaComponent} from './template-driven-cva.component';

describe('TemplateDrivenCvaComponent', () => {
  let component: TemplateDrivenCvaComponent;
  let fixture: ComponentFixture<TemplateDrivenCvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenCvaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
