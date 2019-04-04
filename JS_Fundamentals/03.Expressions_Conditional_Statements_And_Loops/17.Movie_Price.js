function moviePrice(movieTitle,day) {
    let price =0;
    if (movieTitle === 'The Godfather') {
        if (day === 'Monday') {
           price = 12;
        }else if (day === "Tuesday") {
            price =10;
        }else if (day === 'Wednesday') {
            price =15;
        }else if (day === 'Thursday') {
            price =12.50;
        }else if (day === 'Friday') {
            price =15;
        }else if (day === 'Saturday') {
            price = 25;
        }else if (day === 'Sunday') {
            price = 30;
        }
        console.log(price);
    }else if (movieTitle === `Schindler's List`) {
        if (day === 'Monday') {
            price = 8.50;
        }else if (day === "Tuesday") {
            price =8.50;
        }else if (day === 'Wednesday') {
            price =8.50;
        }else if (day === 'Thursday') {
            price =8.50;
        }else if (day === 'Friday') {
            price =8.50;
        }else if (day === 'Saturday') {
            price = 15;
        }else if (day === 'Sunday') {
            price = 15;
        }
        console.log(price);
    }else if (movieTitle === 'Casablanca') {
        if (day === 'Monday') {
            price = 8;
        }else if (day === "Tuesday") {
            price =8;
        }else if (day === 'Wednesday') {
            price =8;
        }else if (day === 'Thursday') {
            price =8;
        }else if (day === 'Friday') {
            price =8;
        }else if (day === 'Saturday') {
            price = 10;
        }else if (day === 'Sunday') {
            price = 10;
        }
        console.log(price);
    }else if (movieTitle === 'The Wizard of Oz') {
        if (day === 'Monday') {
            price = 10;
        }else if (day === "Tuesday") {
            price =10;
        }else if (day === 'Wednesday') {
            price =10;
        }else if (day === 'Thursday') {
            price =10;
        }else if (day === 'Friday') {
            price =10;
        }else if (day === 'Saturday') {
            price = 15;
        }else if (day === 'Sunday') {
            price = 15;
        }
        console.log(price);
    }else{
        console.log('error');
    }
}
moviePrice('The Godfather','Monday');
