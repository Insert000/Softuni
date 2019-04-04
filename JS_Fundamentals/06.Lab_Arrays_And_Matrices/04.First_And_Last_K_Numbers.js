function firstAndLastKNumbers(numbers) {
    numbers = numbers.map(Number);
    let shift = numbers.shift();
    console.log(numbers.slice(0, shift).join(' '));
    console.log(numbers.slice(numbers.length - shift, numbers.length).join(' '));
}