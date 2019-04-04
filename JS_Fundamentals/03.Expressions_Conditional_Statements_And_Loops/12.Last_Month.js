function getLastDay(y, m) {
    let month =m-1;
    return 30 + (month <= 7 ? ((month % 2) ? 1 : 0) : (!(month % 2) ? 1 : 0)) -
        (month === 2) - (month === 2 && y % 4 !== 0 || !(y % 100 === 0
            && y % 400 === 0));
}

getLastDay(2017, 0);