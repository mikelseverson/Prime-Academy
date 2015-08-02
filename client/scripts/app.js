
var currentStudent = 1, studentAmount;

//Displays student onto DOM
var displayStudent = function(primate) {
    $('.name, .description, .thanks').empty();
    $('.name').html("<p>" + primate.name + "</p>");
    $('.description').html("<p>" + primate.desc + "</p>");
    $('.thanks').html("<p>" + primate.thanks + "</p>");
};

//Queries server for specific student
var queryStudent = function(studentNumber) {
    $.get("query/" + studentNumber, function(primate) {
        displayStudent(primate);
    });
};

//Queries server for student count THEN creates nav
var queryStudentCount = function() {
    $.get("query/count", function(students) {
        studentAmount = students.count;
    }).then(function() {
        for(i = 1; i <= studentAmount; i++) {
            $('.pagination').append('<li><a href="#">' + i + '</a></li>');
        }
    });
};

//Queries for default student and total number of students
queryStudent(1);
queryStudentCount();

$(document).ready(function() {
    $('.pagination').on('click', 'li', function() {
        queryStudent($(this).text());
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