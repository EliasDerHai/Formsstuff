import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-historic-approach-demo',
  templateUrl: './historic-approach-demo.component.html',
  styleUrls: ['./historic-approach-demo.component.scss']
})
export class HistoricApproachDemoComponent implements OnInit {
  dayOptions: number[];
  monthsOptions: number[];
  yearOptions: number[];
  model: any = {};

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
    let month = (document.getElementById('month') as any)?.value;

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

  save() {
    this.model.preName = (document.getElementById('preName') as any).value;
    this.model.lastName = (document.getElementById('lastName') as any).value;
    const birthYear = (document.getElementById('year') as any).value;
    const birthMonth = (document.getElementById('month') as any).value;
    const birthDay = (document.getElementById('day') as any).value;

    this.model.birthDate = new Date(birthYear, birthMonth, birthDay);
  }

  getResult() {
    return JSON.stringify(this.model);
  }
}
