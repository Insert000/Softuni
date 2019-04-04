function evenNums(input) {

    let step =Number(input.pop());

    input.filter((element, index) => index % step === 0);
    console.log(input);

}
evenNums(['20', '30', '40']);