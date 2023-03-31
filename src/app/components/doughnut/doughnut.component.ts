import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {



  // Doughnut
  @Input() public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() backgroundColor: string[] = ['#9E120E', '#FF5800', '#FFB414'];
  @Input() data: number[] = [350, 450, 100];


  public doughnutChartData!: ChartData<'doughnut'>;
  @Input() public doughnutChartType: ChartType = 'doughnut';


  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data, backgroundColor: this.backgroundColor },
      ]
    };
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    // console.log(event, active);
  }


}
