function sumOfTwoNums(input) {
    let firstNum = +input[0];
    let secondNum = +input[input.length-1];
    let result = +firstNum+secondNum;
    console.log(result);
}
sumOfTwoNums(['20', '30', '40']);