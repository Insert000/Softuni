function triangle(n) {
    let result = "";

    for (let row = 0; row < n; row++) {
        for (let column = 0; column <= row; column++) {
            result += "$";
        }
        console.log(result);
        result = "";
    }
}
triangle(40);