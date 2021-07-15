import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-driven-with-cva',
  templateUrl: './form-driven-with-cva.component.html',
  styleUrls: ['./form-driven-with-cva.component.scss']
})
export class FormDrivenWithCvaComponent implements OnInit {
  formGroup: FormGroup;

  dayOptions: number[];
  monthsOptions: number[];
  yearOptions: number[];

  converted: string;

  constructor(private formBuilder: FormBuilder) {
    // this.formGroup = this.formBuilder.group({
    //   'preName': ['', Validators.required],
    //   'lastName': ['', Validators.required],
    //   'year': [2021, Validators.compose([Validators.min(1960), Validators.max(1970), Validators.required])],
    //   'month': [1, Validators.required],
    //   'day': [1, Validators.required],
    //   'rating': [3, Validators.min(4)],
    // });

    this.formGroup = this.formBuilder.group({
      'preName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'birth': {
        'year': [2021, Validators.compose([Validators.min(1960), Validators.max(1970), Validators.required])],
        'month': [1, Validators.required],
        'day': [1, Validators.required],
      },
      'rating': [3, Validators.min(4)],
    });

    const definition = this.formGroup.value;

  }

  ngOnInit() {
    this.setYearOptions();
    this.setMonthOptions();
    this.setDayOptions();
  }

  setYearOptions() {
    const y = 2021;
    const options = [];
    for (let i = 0; i < 101; i++) {
      options.push(y - i);
    }
    this.yearOptions = options;
  }

  setMonthOptions() {
    this.monthsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }


  setDayOptions() {
    let month = this.formGroup.value.month;

    if (!month) {
      month = 1;
    }

    let days = month % 2 === 0 ? 31 : 30;

    if (month == 2) {
      days = 28;
    }
    const options = [];
    for (let i = 1; i <= days; i++) {
      options.push(i);
    }
    this.dayOptions = options;
  }

  getResult() {
    return JSON.stringify(this.formGroup.value);
  }

  convert() {
    const converted: any = {};
    converted.preName = this.formGroup.value.preName;
    converted.lastName = this.formGroup.value.lastName;
    converted.birth = new Date(Date.UTC(this.formGroup.value.year, this.formGroup.value.month - 1, this.formGroup.value.day));
    converted.rating = this.formGroup.value.rating;
    this.converted = JSON.stringify(converted);
  }

  getErrors() {
    const errors = [];
    for (let controlsKey in this.formGroup.controls) {
      if (this.formGroup.controls.hasOwnProperty(controlsKey)) {
        for (let errorsKey in this.formGroup.controls[controlsKey].errors) {
          if (this.formGroup.controls[controlsKey].errors.hasOwnProperty(errorsKey)) {
            errors.push(`${controlsKey}     [${errorsKey}]       ${JSON.stringify(this.formGroup.controls[controlsKey].errors[errorsKey])}`);
          }
        }
      }
    }
    return errors.join('\n');
  }

  toggleDisable() {
    this.formGroup.disabled ? this.formGroup.enable() : this.formGroup.disable();
  }
}

