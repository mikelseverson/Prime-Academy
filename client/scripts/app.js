$(document).ready(function () {
    $("#inputForm").submit(function (event) {
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function (data) {
                getData();
            }
        });
    });
    $('#message-container').on('click', 'button', function () {
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).attr('id'),
            success: function() {
                console.log("We killed him Jim!");
                getData();
            },
            error: function(xhr, status) {
                alert("ERROR", status);
            },
            complete: function() { }
        });
        $(this).parent().remove();
    });
});


function updateDom(data) {
    var $el = $('#data-container');
    $el.empty();
    $.each(data, function(index, value) {
        $el.append("<p>" + (index + 1) + ": " + value.name + " - " + value.message + "</p>");
        $el.children().last().append("<button id=" + value._id + ">DELETE</button>");
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
