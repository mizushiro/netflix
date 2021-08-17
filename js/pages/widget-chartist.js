//[widget charts Javascript]


$( document ).ready(function() {
    "use strict";
	
	var chart = new Chartist.Line('.ct-chart', {
	  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', ''],
	  series: [
		[1, 5, 2, 5, 4, 2, 1, 5, 2, 5, 4, 3],
		[2, 3, 4, 7, 1, 3, 2, 1, 3, 6, 2, 1],
	  ]
	}, {
	  low: 0,
	  showArea: true,
	  showPoint: false,
	  fullWidth: true
	});

	chart.on('draw', function(data) {
	  if(data.type === 'line' || data.type === 'area') {
		data.element.animate({
		  d: {
			begin: 2000 * data.index,
			dur: 2000,
			from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
			to: data.path.clone().stringify(),
			easing: Chartist.Svg.Easing.easeOutQuint
		  }
		});
	  }
	});
	
});
