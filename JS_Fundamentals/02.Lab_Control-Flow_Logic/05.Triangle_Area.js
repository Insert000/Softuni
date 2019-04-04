function triangle(a,b,c) {
    let sum;
    let result;
    sum = (a+b+c)/2;
    result = Math.sqrt(sum*(sum-a)*(sum-b)*(sum-c));
    console.log(result);
}
triangle(2,3.5,4);