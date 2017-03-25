function updateDom(data) {
    var $el = $('#message-container');
    $el.empty();
    $.each(data, function(index, value) {
        $el.append("<p>" + (index + 1) + ": " + value.name + ": " + value.message + "</p>");
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
    $('#refresh-icon').on('click', function() {
        getData();
    })
});
