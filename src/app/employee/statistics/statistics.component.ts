import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts'; 

import { Color} from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2010', '2012', '2014', '2016', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 42, 50, 56, 55, 40, 30], label: 'Stock Magzines' },
    { data: [28, 48, 84, 50, 72, 67, 90, 80], label: 'Subscription of Magzines' }
    // { data:  [100, 100, 100, 100, 100, 100, 100, 100], label: 'Total magzines'}
  ];

  public lineChartData: ChartDataSets[] = [
    { data: [10, 25, 38, 50, 65, 73, 90], label: 'Customers' },
    { data: [25, 55, 43, 64, 22, 80, 96], label: 'Employees'},
    { data: [42, 80, 55, 44, 56, 55, 85], label: 'Artists' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
