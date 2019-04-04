function fruitOrVegatable(input) {

    if(input === 'banana' || input ==='apple' || input ==='kiwi'
    || input==='cherry' || input ==='lemon' || input ==='grapes'
    || input === 'peach') {
console.log('fruit');
    }else if(input ==='tomato' ||input ==='cucumber' ||input ==='pepper' ||
    input ==='onion' ||input ==='garlic' ||input ==='parsley' ){
        console.log('vegetable');
    }else{
        console.log('unknown');
    }
}
fruitOrVegatable('banana');


function fruitOrVegetableCase(input) {
    switch (input) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}

fruitOrVegetableCase('pizza');
//: banana, apple, kiwi, cherry, lemon, grapes, peach fruit
//•	Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley