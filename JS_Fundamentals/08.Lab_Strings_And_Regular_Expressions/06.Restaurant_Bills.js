function restaurant(input) {

 let food = input.filter((acc,index) => index % 2 ===0);
 let sum = input.filter((acc,index)=>index%2 ===1).map(Number)
     .reduce((a,b)=>a+b);
 console.log(`You purchased ${food.join(',')} for a total sum of ${sum}`);

}
restaurant(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
restaurant(['Cola', '1.35', 'Pancakes', '2.88']);