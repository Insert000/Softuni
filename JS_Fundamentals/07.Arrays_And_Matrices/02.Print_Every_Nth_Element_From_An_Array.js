function printElements(input) {
    let n = +input[input.length-1];
    input.pop();

    for (let i = 0; i <= input.length; i+=n) {

        console.log(input[i]);
    }

   /* input => input.filter((e, i) =>
        i %input[input.length - 1] == 0
        && i != input.length - 1).join('\n'); */

}
printElements(['5', '20', '31', '4', '20','2']);
 printElements(['1', '2', '3', '4', '5', '6']);