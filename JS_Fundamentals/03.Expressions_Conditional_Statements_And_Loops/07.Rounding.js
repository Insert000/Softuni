function rounding(input) {
    let number = input[0];
    let precision = input[1];
    if(precision>15) {
    precision =15;
    }
 console.log(Number(number.toFixed(precision)));
}
rounding([3.142123123,2]);