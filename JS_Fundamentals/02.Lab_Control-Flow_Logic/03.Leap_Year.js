function leapYear(year) {
    let leap = (year % 4 ===0 && year %100!==0)||(year % 400 === 0);
    console.log(leap ? "yes" : "no");
}
//променлива с високосните години,
//проверка на колко години е високосна
leapYear(2000);
console.log();
leapYear(1999);
console.log();
leapYear(1900);