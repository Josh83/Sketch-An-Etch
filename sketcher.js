$(document).ready(function() {
	
	var gridSize = 25;
	var baseColor =  "#E6E6E6";
	
	var counter = 0;
	
	for (var i = 0; i< gridSize; i++) {
		for ( var j= 0; j < gridSize; j++) {
			$(".wrapper").append("<div class='color_block'></div>");
		}
		$(".wrapper").append("<br>");
	};
	
	$(".color_block").mouseenter(function() {
		$(this).css("background-color", getColor(counter++));
	});
	
/*  	$(".color_block").mouseleave(function() {
		$(this).css("background-color", baseColor);
	});  */
	
	var getColor = function(counterNumber) {
		var r = ((counterNumber>>8) & 0xf) * 0x11;
		var g = ((counterNumber>>4) & 0xf) * 0x11;
		var b = (counterNumber & 0xf) * 0x11;
		return("rgb(" + r + "," + g +"," + b +")");
	};
	
	
	
});