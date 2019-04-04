function delimiter(input) {
    let devision = input.pop();

    console.log(input.join(devision));
}
delimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
delimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);