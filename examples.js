var showList = ["red", "cyan", "purple"]

$(document).ready(function() {
    $.ajax('data.json', {
        success: function(response){
            $.each(response, function(index, myObj) {
                if(showList.indexOf(myObj.color) > -1) {
                    var msg = $("<div></div>");
                    msg.css('background-color', myObj.value);
                    msg.append("Color " + myObj.color);
                    $('#container').append(msg);
                    }  
                else {
                    console.log("ignoring color " + myObj.color + " not in array.");
                } 
            });
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

});