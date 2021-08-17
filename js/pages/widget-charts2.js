//[widget charts Javascript]

//Project:	Unique Admin - Responsive Admin Template
//Primary use:   Used only for the  widget charts



$( document ).ready(function() {
    "use strict";
	
	if( $('#doughnut-chart').length > 0 ){
		var ctx7 = document.getElementById("doughnut-chart").getContext("2d");
		var data7 = {
			 labels: [
			"일정",
			"메일",
			"전자결재"
		],
		datasets: [
			{
				data: [100, 150, 150],
				backgroundColor: [
					"#f4606d",
					"#6471e6",
					"#33c742"
				],
				hoverBackgroundColor: [
					"#f13a4a",
					"#4252e2",
					"#1fbd2f"
				]
			}]
		};
		
		// Chart.pluginService.register({
		// 	beforeDraw: function(chart) {
		// 	  var width = chart.chart.width,
		// 		  height = chart.chart.height,
		// 		  ctx = chart.chart.ctx;
		  
		// 	  ctx.restore();
		// 	  var fontSize = (height / 114).toFixed(2);
		// 	  ctx.font = fontSize + "em sans-serif";
		// 	  ctx.textBaseline = "middle";
		  
		// 	  var text = "16",
		// 		  textX = Math.round((width - ctx.measureText(text).width) / 2),
		// 		  textY = height / 2;
		  
		// 	  ctx.fillText(text, textX, textY);
		// 	  ctx.save();
		// 	}
		//   });
		
		var doughnutChart = new Chart(ctx7, {
			type: 'doughnut',
			data: data7,
			options: {
				animation: {
					duration:	2500
				},
				responsive: false,
				legend: {
					display: false,
					labels: {
					fontFamily: "NotoSansRegular",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'NotoSansRegular'"
				},
				elements: {
					arc: {
						borderWidth: 0
					},
				},
				cutoutPercentage: 60,
			}
		});
	}
	
}); 