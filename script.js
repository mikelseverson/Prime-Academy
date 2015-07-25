$(document).ready(function() {
	$('.user-search-btn').on('click', function() {
		queryData(encodeURI($('.user-search-field').val()));
	});
});

function queryData(query) {
	$('.thumbnail').css('display', 'block')

	$.ajax('https://api.github.com/users/' + query, {
		type: "GET",
		data: {client_id: "f8a4b95805c9804c9eb7", client_secret: "4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d"},
		success: function(response) {
			console.log(response);
			displayUser(response);
		}
	});
	$.ajax('https://api.github.com/users/' + query +  '/repos', {
		type: "GET",
		data: {client_id: "f8a4b95805c9804c9eb7", client_secret: "4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d"},
		success: function(response) {
			console.log(response);
			displayRepos(response);
		}
	});
}


function displayUser(data) {
	$('.user').children().html('');
	$('.user-name').append("<h2>"+data.name+"</h2>");
	$('.user-picture').append("<img class='user-picture' src= "+ data.avatar_url + "></img>");
	$('.user-bio').append("<p>"+data.location+"</p>");
	if(data.bio) { $('.user-bio').append("<p>"+data.bio+"</p>"); }
	if(data.blog) { $('.user-blog').append("<p><a href="+data.blog+">Website</a></p>"); }
	$('.user-follow').append("<p>Following: " + data.following + " Followers: " + data.followers + "</p>")
}

function displayRepos(data) {
	$('.repos').html('<h2>Github Repositories</h2>');
	$.each(data, function(index, obj) {
		if(obj.description) {
			$('.repos').append('<p><a href=' + obj.html_url + '>' + obj.full_name + '</a> : ' +  obj.description + '</p>')
		}
		else {
			$('.repos').append('<p><a href=' + obj.html_url + '>' + obj.full_name + '</a></p>')
		}
	})

}