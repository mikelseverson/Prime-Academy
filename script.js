$(document).ready(function() {
	var clickCount = 0;
	$('.newDivButton').on('click', function(){//Adds new Div with class newDiv and data attribute buttonToggle
		clickCount++;
		$(this).after("<div class='newDiv' data-button-toggle='1'>Total number of clicks " + clickCount + " <button class='colorChangeBtn'>Change Color</button><button class='remove'>Remove</button></div>");
	});
	$('body').on('click', '.colorChangeBtn', function() { //swap color on click between green and red
		buttonState = $(this).parent().data("buttonToggle");
		parentDiv = $(this).parent();
		if(buttonState == 1) {
			parentDiv.css('background-color', 'red');
			parentDiv.data("buttonToggle", 2);
		}
		else if(buttonState == 2) {
			parentDiv.css('background-color', 'green');
			parentDiv.data("buttonToggle", 1);
		}
	});
	$('body').on('click', '.remove', function() { //delete div on button click
		$(this).parent().remove();
	});
})

