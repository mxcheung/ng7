import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data1 = [10, 2, 3,6];
  data2 = [5, 2, 3, 4];

  chart1: Chart;
  chart2: Chart;
  

  constructor() { 
    this.getData();
   }

  ngOnInit() {
    this.chart1 = new Chart({
            chart: {
              type: 'line',
              backgroundColor: null
            },
            title: {
              text: ''
            },
            credits: {
              enabled: false
            },
            xAxis: {
              type: 'category'
            },
            colors: ['#009286'],
            series: [{
              name: 'Total amount of trades',
              data: this.data1
            }, {
              name: 'Cumulative amount of trades',
              data: cumulative_data
            }
            ]
          });

  }

  getData() {


    this.chart1 = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'category'
      },
      colors: ['#009286'],
      series: [
        {
          name: 'Total amount of trades',
          data: this.data1,
          type: undefined
        }  ]
    });

    this.chart2 = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        allowDecimals : false,
        type: 'category'
      },
      colors: ['#009286'],
      series: [
        {
          name: 'Trades per exchange ',
          data: this.data2,
          type: undefined
        }  ]
    });



}
}
