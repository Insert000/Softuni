function distanceOverTime(input) {
    let distanceOne = input[0];
    let distanceTwo = input[1];
    let time = input[2];
    let finalDistanceOne = distanceOne / 1000;
    let finalDistanceTwo = distanceTwo / 1000;
    let finalTime = time/3600;
    let distance = Math.abs(finalDistanceOne - finalDistanceTwo);
    let timeInSeconds = time / distance;
    console.log(timeInSeconds);
}

distanceOverTime([0, 60, 3600]);
console.log();
distanceOverTime([11, 10, 120]);
console.log();
distanceOverTime([5, -5, 40]);