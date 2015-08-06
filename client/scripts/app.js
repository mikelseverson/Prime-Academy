var modAdjArray = [], nounArray = [], adjArray = [];

var adjReady = false;
var nounReady = false;
var modAdjReady = false;

var queryNouns = function() {
    var gotNouns = false;
    $.ajax({
        url: "/data/nouns",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log("got noun data");
            nounArray = data;
            gotNouns = true;
            var allComplete = isEverythingReady();
            if(allComplete){
                //append to DOM
            }
        },
        error: function() {
            console.log("failed to get nouns");
        }
    });











    var gotAdj = false;
    var gotModAdj = false;

    $.ajax({
        url: "/data/modadj",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log("got modadj data");
            modAdjArray = data;
            gotModAdj = true;

        },
        error: function() {
            console.log("failed to get modifying adjectives");
        }
    });
    $.ajax({
        url: "/data/adj",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log("got adj data");
            adjArray = data;
            gotAdj = true;

        },
        error: function() {
            console.log("failed to get adjectives");
        }
    });

    var adjQuery = function() {

    }

};

var isEverythingReady = function(){
    return adjReady && nounReady && modAdjReady;
};

var successHandler = function(){
    //if all are successful
    //remove loading screen
    //add button

};


$(document).ready(function() {
    queryData();

});




