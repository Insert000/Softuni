// function printTriangle(n) {
//
//     function printStars(count) {
//
//         console.log("*".repeat(count));
//
//     }
//
//     for (let i = 1; i <= n; i++) printStars(i);
//
//     for (let i = n - 1; i > 0; i--) printStars(i);
// }
// printTriangle(3);

function triangles(input) {
    function solve(count) {
        console.log('*'.repeat(count));
    }

    for (let i = 1; i <= input; i++)  solve(i);

    for (let i = input-1; i > 0; i--)  solve(i);

}
triangles(3);

