$(document).ready(function() {

$('.getDataBtn').on('click',  function() {
	getData();
	});

});

function getData() {
	$.ajax('data.html', {
	success: function(response) {
		$(".data").append(response); },
	error: function() {
		alert("error");g
		}
	});
}