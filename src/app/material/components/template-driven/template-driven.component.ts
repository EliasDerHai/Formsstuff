import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  model: any = {};

  dayOptions: number[];
  monthsOptions: number[];
  yearOptions: number[];

  converted: string;
  disabled = false;

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
    let month = this.model.birthYear;

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
    return JSON.stringify(this.model);
  }

  convert() {
    const converted: any = {};
    converted.preName = this.model.preName;
    converted.lastName = this.model.lastName;
    converted.birth = new Date(Date.UTC(this.model.birthYear, this.model.birthMonth - 1, this.model.birthDay));
    this.converted = JSON.stringify(converted);
  }

  onInvalid($event: Event) {
    console.log($event);
  }
}
