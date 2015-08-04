/**
 * Created by mikelseverson on 8/3/15.
 */
var studentList = [];

Array.prototype.shuffle = function() {
    var input = this;
    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};

var getStudents = function() {
    $.ajax({
        url: "/data",
        success: function(data){
            $.each(data, function(index, value) {
                studentList.push(value);
            });
            for(var i = 2; i <= studentList.length/2; i++) {
                $('select').append('<option value='+i+'>'+i+'</option>')
            }
        }
    });
};

var createGroups = function(groupCount) {
    //Remove any previously created groups
    $('.group-container').empty();
    //Create group containers
    for(var i = 1; i <= groupCount; i++) {
        $('.group-container').append("<div class='group' id='group" + i + "'></div>");
        $('#group' + i).append("<h1>Group " + i + "</h1>")
    }
    //Add students to group containers
    var groupIndex = 1;
    for(i = 0; i < studentList.length; i++) {
        if(groupIndex > groupCount) { //once we have added a student to every group
            groupIndex = 1;//start adding to the first group again
        }
        $('#group' + groupIndex).append("<p class='student' id='student" + i + "'>" + studentList[i] + "</p>");
        $('#student' + i).fadeIn(i * 150);
        groupIndex++; //indicates which group next student will be added to
    }
};

$(document).ready(function() {
    //ajax call
    getStudents();
    //listener setup
    $('.create-groups').on('click', function() {
        studentList.shuffle();
        var numGroupsToMake = $("select option:selected").text();
        createGroups(numGroupsToMake);
    });
});