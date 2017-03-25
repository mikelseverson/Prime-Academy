function updateDom(data) {
    var $el = $('#message-container');
    $el.empty();
    $.each(data, function(index, value) {
        $el.append("<p>" + (index + 1) + ": " + value.name + ": " + value.message + "</p>");
        $el.children().last().prepend("<button id="+value._id+" class=delete-button>DELETE</button>");
    });
}

function getData(){
    $.ajax({
        type:"GET",
        url: "/messages",
        success: function(data){
            updateDom(data);
        }
    })
}


$(document).ready(function () {
    getData();
    $("#inputForm").submit(function (event) {
        event.preventDefault();
        var formData = $('input, textarea').serialize();
        $.ajax({
            type: "POST",
            url: "/messages",
            data: formData,
            success: function () {
                getData();
            }
        });
    });
    $('#message-container').on('click', '.delete-button', function () {
        var el = $(this).parent();
        $.ajax({
            type: "DELETE",
            url: "/messages/" + $(this).attr('id'),
            success: function() {
                el.fadeOut(1000, function() {
                    getData()
                });
            },
            error: function(xhr, status) {
                alert("ERROR" + status);
            }
        });
    });
    $('#refresh-icon').on('click', function() {
        getData();
    })
});