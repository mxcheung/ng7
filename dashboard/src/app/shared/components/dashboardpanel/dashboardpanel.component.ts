import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboardpanel',
  templateUrl: './dashboardpanel.component.html',
  styleUrls: ['./dashboardpanel.component.css']
})
export class DashboardpanelComponent implements OnInit {

  @Input() paneltype: string;
  @Input() bignumber: string;
  @Input() chartcontent: any;
  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
