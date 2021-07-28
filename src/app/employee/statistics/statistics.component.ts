import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

 
  public activity;
  public xData;
  public label;
  donutoptions:any;
  baroptions:any;

   
  constructor() {
 

    this.donutoptions = {
      chart: {
        renderTo: 'container',
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Most to least liked Magazines'
      },
      subtitle: {
          text: ''
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Customer Ratings',
          data: [
              ['Travel+Leisure', 8],
              ['The Newyorker', 3],
              ['World Travel', 1],
              ['Traveller', 6],
              ['LA Travel', 8],
              ['Planet Goa', 4],
              ['Budget Travel', 4],
              ['Wanderlust', 1],
          ]
      }]
  };


  this.baroptions = {
    chart: {
      renderTo: 'container2',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 50
        }
    },

    title: {
        text: 'User Registrations, grouped by gender'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Registrations',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '{point.key}',

        pointFormat: '\u25CF {series.name}: {point.y} '
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Male',
        data: [15, 13, 18, 27, 22,15,10],
        stack: 'male'
    }, {
        name: 'Female',
        data: [23, 11, 14, 34, 15, 27, 16],
        color: 'pink',
        stack: 'female'
    }]
};
  }

  
  
    ngOnInit(){ 
    }

    createDonutChart(){
      Highcharts.chart('container', this.donutoptions);
    }

    
    createBarChart(){
      Highcharts.chart('container2', this.baroptions);
    }
}


