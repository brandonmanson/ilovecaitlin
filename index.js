$(document).ready(function() {

	$("#cuteness").attr("src", "images/Love_Heart_SVG.svg");

	var puppies = new Array();

	puppies[0] = new Image();
	puppies[0].src = "images/Love_Heart_SVG.svg"

	puppies[1] = new Image();
	puppies[1].src = "images/cutepuppy.png"

	puppies[2] = new Image();
	puppies[2].src = "images/cutepuppy_2.png"

	puppies[3] = new Image();
	puppies[3].src = "images/cutepuppy_3.png"

	puppies[4] = new Image();
	puppies[4].src = "images/cutepuppy_4.png"

	puppies[5] = new Image();
	puppies[5].src = "images/cutepuppy_5.png"

	puppies[6] = new Image();
	puppies[6].src = "images/cutepuppy_6.png"

	puppies[7] = new Image();
	puppies[7].src = "images/cutepuppy_7.png"

	puppies[8] = new Image();
	puppies[8].src = "images/cutepuppy_8.png"

	$("button").click(function() {
		$("#cuteness").attr("src", puppies[Math.floor(Math.random()* puppies.length)].src);
	});

});