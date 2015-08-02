/**
 * Created by mikelseverson on 8/1/15.
 */
var studentNum = 1;
var studentCount;
var getStudent = function(studentNum) {
    $.get("query/" + studentNum, function(primate) {
        $('.data').empty();
        $('.data').append("<p>" + primate.name + "</p>");
        $('.data').append("<p>" + primate.desc + "</p>");
        $('.data').append("<p>" + primate.thanks + "</p>");
    });
};
$(document).ready(function() {
    $.get("query/count", function(primate) {
        studentCount = primate.count;
    });

    $('.next').on('click', function() {
        if(studentNum < studentCount) studentNum++;
        else studentNum = 1;
        getStudent(studentNum);
    });

    $('.previous').on('click', function() {
        if(studentNum > 1) studentNum--;
        else studentNum = studentCount;
        getStudent(studentNum);
    });

    getStudent(1);
});
