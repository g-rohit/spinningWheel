var degree = 1;
var count = 0;
var start;

function startSpinning() {
    // console.log('starting the spin');

    var wheel = document.querySelector(".wheel");
    start = setInterval(() => {
        // console.log("Degree value is" + degree);

        wheel.style.transform = "rotate(" + degree + "deg)";
        degree++;

        if (degree == 360) {
            count++;
            degree = 0;
        }
        console.log("Spin count: " + count);
    }, 1);
    console.log(degree);

    return start;
}

function stopSpinning() {

    console.log('stopping the spin');
    console.log(degree);

    // wheel.style.transform = 'revert';

    clearTimeout(start);
}