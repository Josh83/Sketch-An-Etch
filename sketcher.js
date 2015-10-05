$(document).ready(function() {
	
	var gridColumns = 32;
	var counter = 0;
	var margin = 1;
	var initial_dot_color = "#E6E6E6";
	
	var wrapperWidth = $(".bubble_wrapper").width();
	var wrapperHeight = $(".bubble_wrapper").height();
	var divSize = Math.floor((wrapperWidth-2.1*(gridColumns))/gridColumns);
	var divRadius = Math.floor(divSize / 2);
	
	 var gridRows = Math.floor(wrapperHeight / divSize);
	
	for (var i = 0; i< gridRows; i++) {
		for ( var j= 0; j < gridColumns; j++) {
			$(".bubble_wrapper").append("<div class='color_block' style='height:" + divSize + "px; width:"  + divSize + "px; border-radius:" + divRadius + "px; margin:" + margin + "px; background-color:" + initial_dot_color + "'></div>");
		}
		$(".bubble_wrapper").append("<br>");
	};
	
	$(function() {
		$("#btnClear").click(function(){
			$(".color_block").css("background-color", initial_dot_color);
		});
	});
	
	$(".color_block").mouseenter(function() {
		$(this).css("background-color", getColor(counter++));
	});
	
		
	var getColor = function(counterNumber) {
		counterNumber *= 25;
		var r = ((counterNumber>>8) & 0xf) * 0x11;
		var g = ((counterNumber>>4) & 0xf) * 0x11;
		var b = (counterNumber & 0xf) * 0x11;
		return("rgb(" + r + "," + g +"," + b +")");
	};
	
});