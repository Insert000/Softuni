function rotateArray(input) {
   let rotation  = Number(input[input.length-1]);
   input.pop();

    for (let i = 0; i < rotation % input.length; i++) {
          input.unshift(input.pop());

    }
    console.log(input.join(' '));
}
