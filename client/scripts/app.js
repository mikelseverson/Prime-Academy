
var currentStudent = 1, studentAmount;

//Displays student onto DOM
var displayStudent = function(primate) {
    $('.student').fadeToggle('slow', function() {
        $('.name, .description, .thanks').empty();
        $('.name').html("<p>" + "Primate #" + currentStudent + ": " + primate.name + "</p>");
        $('.description').html("<p>" + primate.desc + "</p>");
        $('.thanks').html("<p>" + primate.thanks + "</p>");
    });
    $('.student').fadeToggle('slow');
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
        $('.pagination').prepend('<li><a href="#" class="prev">&laquo;</a></li>');
        for(i = 1; i <= studentAmount; i++) {
            $('.pagination').append('<li><a href="#" class="num">' + i + '</a></li>');
        }
        $('.pagination').append('<li><a href="#" class="next">&raquo;</a></li>');
    });
};

//Queries for initial student and checks the total number of students
queryStudent(1);
queryStudentCount();

$(document).ready(function() {
    $('.pagination').on('click', '.num', function() {
        currentStudent = $(this).text();
        queryStudent(currentStudent);
    });
    $('.pagination').on('click', '.next', function() {
        if(currentStudent < studentAmount) currentStudent++;
        else currentStudent = 1;
        console.log(currentStudent, studentAmount);
        queryStudent(currentStudent);
    });
    $('.pagination').on('click', '.prev', function() {
        if(currentStudent > 1) currentStudent--;
        else currentStudent = studentAmount;
        queryStudent(currentStudent);
    });
});