function splitStrings(input, secondInput) {
    let delimeter = input.split(secondInput);
    for (let i = 0; i < delimeter.length; i++) {
        console.log(delimeter[i]);
    }
}

splitStrings('One-Two-Three-Four-Five', '-');