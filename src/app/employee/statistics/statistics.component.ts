import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts'; 

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
    { data: [28, 48, 84, 50, 72, 67, 90, 80], label: 'Subscription of Magzines' },
    { data:  [100, 100, 100, 100, 100, 100, 100, 100], label: 'Total magzines'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
