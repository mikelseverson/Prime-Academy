function doubleNumber(num) {
    console.log(num + " doubled is " + num*2);
    return num * 2;
}

function squareNumber(num) {
    console.log(num + " squared is " +  num*num);
    return num * num;
}

function halfNumber(num) {
    console.log("half of " + num + " is " +  num / 2);
    return num / 2;
}

function computeNumber(num) {
    console.log("starting computations with the number " + num);
    return doubleNumber(squareNumber(halfNumber(num)));
}

console.log("the final number is " + computeNumber(5));