function censorship(input) {
   let text = input.shift();
   let forbiddenWord = input;
    for (let word of forbiddenWord) {
      text = text.split(word).join('-'.replace(word.length))
    }
    return text;
}
//function censorship(input) {
//     let text = input.shift();
//     let forbiddenWords = input;
//     for(let word of forbiddenWords) {
//         text = text.split(word).join("-".repeat(word.length));
//     }
//
//     return text;
// }