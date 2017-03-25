var modAdjArray = [], nounArray = [], adjArray = [];
var successfulCalls = 0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var queryNouns = function() {
    var gotNouns = false;
    $.ajax({
        url: "/data/nouns",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            successHandler();
            nounArray = data;
        }
    });
};

var queryModAdj = function() {
    $.ajax({
        url: "/data/modadj",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            successHandler();
            modAdjArray = data;
        }
    });
};

var queryAdj = function() {
    $.ajax({
        url: "/data/adj",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            successHandler();
            adjArray = data;
        }
    });
};

var successHandler = function(){
    successfulCalls++;
    if(successfulCalls >= 3) {
        $('#loading').remove();
        $('body').append('<button id="create-adlib" >Create Adlib</button>')
    }
};

var shuffleArrays = function() {
    adjArray = shuffle(adjArray);
    nounArray = shuffle(nounArray);
    modAdjArray = shuffle(modAdjArray);
};

var createAdlib = function() {
    return modAdjArray[0] + " " + adjArray[0] + " " + nounArray[0];
};


$(document).ready(function() {
    $('body').last().append("<div id='loading'>Loading....</div>")

    queryAdj();
    queryModAdj();
    queryNouns();

    $('body').on('click', '#create-adlib', function() {
        $('#container').remove();
        shuffleArrays();
        $('body').last().append("<div id='container'>" + createAdlib() + "</div>");
    });
});




