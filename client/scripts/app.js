/**
 * Created by mikelseverson on 8/1/15.
 */
var currentStudent = 1;
var studentAmount;
var queryStudent = function(studentNum) {
    $.get("query/" + studentNum, function(primate) {
        $('.name').empty();
        $('.data').empty();
        $('.name').append("<p>" + primate.name + "</p>");
        $('.data').append("<p>" + primate.desc + "</p>");
        $('.data').append("<p>" + primate.thanks + "</p>");
    });
};
$(document).ready(function() {
    $.get("query/count", function(students) {
        studentAmount = students.count;
    });

    $('.next').on('click', function() {
        if(currentStudent < studentAmount) currentStudent++;
        else currentStudent = 1;
        queryStudent(currentStudent);
    });

    $('.previous').on('click', function() {
        if(currentStudent > 1) currentStudent--;
        else currentStudent = studentAmount;
        queryStudent(currentStudent);
    });
});
queryStudent(1);
