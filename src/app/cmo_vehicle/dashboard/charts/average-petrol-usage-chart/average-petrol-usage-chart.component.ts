import { Component  } from '@angular/core';


@Component({
  selector: 'app-average-petrol-usage-chart',
  templateUrl: './average-petrol-usage-chart.component.html',
  styleUrls: ['./average-petrol-usage-chart.component.scss']
})
export class AveragePetrolUsageChartComponent {
  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: ""
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Labour" },
		  { y: 10, name: "Legal" },
		  { y: 20, name: "Production" },
		  { y: 15, name: "License" },
		  { y: 23, name: "Facilities" },
		  { y: 17, name: "Taxes" },
		  { y: 12, name: "Insurance" }
		]
	  }]
	}
}
