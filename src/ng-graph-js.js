angular.module('chartjs-directive', []).directive('chart', function() {

	return {
		restrict : 'E',
		template : '<canvas></canvas>',
		scope : {
			data: "="
		},
		link : function(scope, element, attrs) {
			
			var init, 
				canvas;
						
			init = function(){
				
				element.empty();
				element[0].style.display = 'block';
				canvas = document.createElement('canvas');
				canvas.height = 300;
				canvas.width = 400;
				element[0].appendChild(canvas);
				
				var myRadarChart = new Chart(canvas.getContext('2d'), {
					type: 'radar',
					data: scope.data,
				   	options: {
			            scale: {
			                reverse: true,
			                ticks: {
			                    beginAtZero: true
			                }
			            }
			    	}
				});
			}
						
			scope.$watch('data', function(newVal, oldVal) {				
		        				
				if(newVal){
		        	init();
		        }
		    });
		}
	}
});