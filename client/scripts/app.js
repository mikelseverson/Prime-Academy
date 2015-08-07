$(document).ready(function () {
    $("#inputForm").submit(function (event) {
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function (data) {
                getData();
                console.log(data);
            }
        });
    });
    $('#data-container').on('click', 'button', function () {
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).attr('id'),
            success: function() {
                console.log("He's dead Jim!");
                getData();
            },
            error: function(xhr, status) {
                alert("ERROR", status);
            },
            complete: function() {
                console.log("delete done");
            }
        });
        $(this).parent().remove();
    });
    getData();
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
