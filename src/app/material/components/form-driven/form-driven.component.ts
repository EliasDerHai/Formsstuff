import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.scss']
})
export class FormDrivenComponent implements OnInit {
  formGroup: FormGroup;

  dayOptions: number[];
  monthsOptions: number[];
  yearOptions: number[];

  converted: string;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      'preName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'year': [2021, Validators.compose([Validators.min(1960), Validators.max(1970), Validators.required])],
      'month': [1, Validators.required],
      'day': [1, Validators.required],
    });
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
      console.log('omg its feb!!');
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
    this.converted = JSON.stringify(converted);
  }

  log() {
    console.log(this.formGroup);
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

    // this.formGroup.controls.get('preName');
  }
}
