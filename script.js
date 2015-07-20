var employeeList = [];
var firstNames = ["Sarah", "Nikki", "Corina", "Jimmy", "Chad", "Isiah", "Mikel",
    "Sam", "Tim", "Charles", "Marcia", "Nik", "John", "Fred", "Jason",
    "Phil", "Bobby", "Sandra", "Eric", "Robin", "Eric", "Shanice"];
var lastNames = ["Severson", "South", "Shaddy", "Guiliani", "Anderson", "Zill",
    "Foiler", "Knickers", "O'leary", "Ludwig", "Harris", "Sandra",
    "Floboins", "Miller", "Lamar"]
var titles = ["Teacher", "Pilot", "Mailman", "Driver", "Student", "Actor",
    "Waiter", "Fisherman", "Writer", "Programmer", "Collector"]
var totalSalary;

function Employee(fName, lName, ID, title, score, salary) { //Employee Object
    this.firstName = fName;
    this.lastName = lName;
    this.employeeId = ID;
    this.jobTitle = title;
    this.reviewScore = score;
    this.salary = salary;
}
$(document).ready(function() {
    buildTable();
    var $inputs = $(".input-container :input");
    $('.input-container :submit').on('click', function(event) { //on add employee button click
        event.preventDefault();
        var employeeData = [];
        $inputs.each(function() {
            employeeData.push($(this).val());
        });
        if (checkEntry(employeeData)) {
            addEmployee(new Employee(employeeData[0],
                employeeData[1], employeeData[2],
                employeeData[3], employeeData[4],
                employeeData[5]));
        }
    });
    $("body").on('click', '.delete', function() { //on remove row button click
        var $firstName = $(this).parent().parent().children(":first");
        var $lastName = $(this).parent().parent().children(":nth-child(2)");
        var $removingId = $(this).parent().parent().children(":nth-child(3)");
        $(this).parent().parent().remove();
        removeEmployee($firstName.text(), $lastName.text(),$removingId.text());
    });
    $('#randomEmployeeButton').on('click', function(event) { //on random employee button click
        event.preventDefault();
        addEmployee(new Employee(firstNames[randomNumber(1,
                firstNames.length - 1)], lastNames[
                randomNumber(1, lastNames.length - 1)],
            randomNumber(0, 9999), titles[randomNumber(
                1, titles.length - 1)], randomNumber(1,
                5), randomNumber(30000, 250000), "a",
            "a"));
    });
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function checkEntry(entry) {
    entry.splice(entry.length - 2, entry.length);
    entry[4] = parseInt(entry[4]);
    for (i = 0; i < entry.length; i++) {
        if (entry[i] == "" || entry[i] == null) {
            console.log("Please fill out all entry boxes")
            return false;
        }
        if (parseInt(entry[4]) > 5 || parseInt(entry[4]) < 0) {
            console.log("Failed to add item review score not between 0 and 5")
            return false;
        }
    }
    return true;
}

function addEmployee(employee) {
    var employeeSwapped = false;
    for (i = 0; i < employeeList.length; i++) {
        if (employeeList[i].firstName == employee.firstName && employeeList[
            i].lastName == employee.lastName) {
            if (window.confirm("The name " + employee.firstName + " " +
                employee.lastName +
                " is already being used.. \nReplace old employee with this new entry?"
            )) {
                employeeList[i] = employee;
                employeeSwapped = true;
            } else alert("failed to add employee name is already used!")
        } else if (employeeList[i].employeeId == employee.employeeId) {
            if (window.confirm("The id " + employee.employeeId +
                " has been already assigned to another employee.. \nReplace old employee with this new entry?"
            )) {
                employeeList[i] = employee;
                employeeSwapped = true;
            } else alert("failed to add employee ID is already used!")
        }
    }
    if (!employeeSwapped) {
        employeeList.push(employee);
    }
    sortEmployees();
    buildTable();
}

function removeEmployee(fName, lName, id) {
    var initialLength = employeeList.length;
    if (employeeList.length == 1) {
        employeeList = [];
        buildTable();
    } else {
        for (i = 0; i < employeeList.length; i++) {
            if (employeeList[i].firstName == fName && employeeList[i].lastName ==
                lName && employeeList[i].employeeId == id) {
                employeeList.splice(i, 1); //Remove first found item with matching full name and id should only ever be one found
                buildTable();
                return;
            }
        }
    }
}

function sortEmployees() {
    employeeList.sort(function(a, b) {
        var nameA = a.firstName.toLowerCase(),
            nameB = b.firstName.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB) return 1
        return 0 //no sort
    })
}

function colorRating(rating) {
    var rate = "";
    rating = parseInt(rating);
    switch (rating) {
        case 1:
            rate = "awful";
            break;
        case 2:
            rate = "poor";
            break;
        case 3:
            rate = "average";
            break;
        case 4:
            rate = "good";
            break;
        default:
            rate = "excellent";
            break;
    }
    return rate;
}

function buildTable() {
    totalSalary = 0;
    $('#employeeData tr').not(':first').remove(); //deletes table except header
    var deleteImg =
        "<td><img src='delete-button.png' class='delete'></img></td>"
    for (i = 0; i < employeeList.length; i++) {
        totalSalary += employeeList[i].salary;
        var colorClass = colorRating(employeeList[i].reviewScore)
        $('#employeeData tr:last').after("<tr> <td>" + employeeList[i].firstName +
            "</td> <td>" + employeeList[i].lastName + "</td> <td>" +
            employeeList[i].employeeId + "</td> <td>" + employeeList[i]
            .jobTitle + "</td> <td class=" + colorClass + ">" +
            employeeList[i].reviewScore + "</td> <td>" +
            numberWithCommas(employeeList[i].salary) + "</td>" +
            deleteImg + "</tr>");
    }
    $('#metrics').text("Combined Salaries: $" + numberWithCommas(totalSalary));
}