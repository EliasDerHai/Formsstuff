import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormDrivenWithCvaComponent} from './form-driven-with-cva.component';

describe('FormDrivenWithCvaComponent', () => {
  let component: FormDrivenWithCvaComponent;
  let fixture: ComponentFixture<FormDrivenWithCvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDrivenWithCvaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDrivenWithCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
