import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}
