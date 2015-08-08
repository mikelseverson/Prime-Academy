$(document).ready(function () {
    getData();
    $("#inputForm").submit(function (event) {
        event.preventDefault();
        var formData = $('input');
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function (data) {
                getData();
            }
        });
    });
    FB.init({
        appId      : '1454423491530561',
        xfbml      : true,
        version    : 'v2.4'
    });

    FB.getLoginStatus(function(response) {
        alert(response.authResponse.userID);
    });
    $('#message-container').on('click', 'button', function () {
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).attr('id'),
            success: function() {
                console.log("We killed him Jim!");
            },
            error: function(xhr, status) {
                alert("ERROR", status);
            },
            complete: function() {
                getData();
            }
        });
        $(this).parent().remove();
    });
});


function updateDom(data) {
    var $el = $('#message-container');
    $el.empty();
    $.each(data, function(index, value) {
        $el.append("<p>" + (index + 1) + ": " + value.name + " - " + value.message + "</p>");
        $el.children().last().prepend("<button id=" + value._id + ">DELETE</button>");
    });
}

function getData(){
    $.ajax({
        type:"GET",
        url: "/things",
        success: function(data){
            updateDom(data);
        }
    })
}
