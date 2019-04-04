function imperialUnits(input) {
    let inch  =12;
    let sum = input/inch;
    let fixed = Math.floor(input/inch).toFixed(0);
    let secondSum = input-fixed;

    if(input/inch.toFixed(0)) {
    console.log(`${sum}'-0"`);
    }if(!input/inch.toFixed(0)) {
      console.log(`${fixed}'-${secondSum}"`);
    }if(input<inch){
       console.log(`0'-${input}"`);
    }
}
imperialUnits(36);
console.log();
imperialUnits(55);
console.log();
imperialUnits(11);