function sumOfThreeNums(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
             sum+= Number(input[i]);
     }
     let vot = sum*0.20;
     let total = sum*1.20;

     console.log(`Sum = ${sum}`);
     console.log(`VAT = ${vot}`);
     console.log(`total = ${total}`);
}
// sumOfThreeNums([1.20, 2.60, 3.50]);
// console.log();
// sumOfThreeNums([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);

function solve(input) {

    let sum =0;
    for (let i = 0; i < input.length; i++) {
           sum +=Number(input[i]);
    }
    let vat  = sum*0.20;
    let total = sum *1.20;
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);

}
solve([1.20, 2.60, 3.50]);