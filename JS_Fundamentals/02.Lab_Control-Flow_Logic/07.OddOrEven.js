function oddOrEven(input) {
    if (input % 2 === 0 ||input%-2===0 ) {
        console.log("even");
    }else if (input % 2 === 1 || input %2===-1) {
        console.log('odd');
    }else{
        console.log('invalid');
    }
}
oddOrEven(5);
console.log();
oddOrEven(8);
console.log();
oddOrEven(1.5);