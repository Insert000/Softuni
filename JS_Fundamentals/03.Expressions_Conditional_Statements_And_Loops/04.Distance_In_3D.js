function distance3D(input) {
let x = input[0];
let y = input[1];
let z = input[2];
let x1= input[3];
let y1= input[4];
let z1= input[5];

let sum = Math.sqrt((x-x1)**2 +(y-y1)**2 +(z-z1)**2);
console.log(sum);
}
distance3D([1, 1, 0, 5, 4, 0]);
console.log();
distance3D([3.5, 0, 1, 0, 2, -1]);
