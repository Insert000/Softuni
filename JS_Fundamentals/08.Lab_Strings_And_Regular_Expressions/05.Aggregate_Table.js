function aggregateTable(input){

    let towns = [];
    let sum = 0;

    for (let pair of input) {

        let tokens = pair.split('|').filter(tokens => tokens!=='');
        let town = tokens[0].trim();
        let value = Number(tokens[1].trim());

        towns.push(town);
        sum += value;
    }


    console.log(towns.join(", "));
    console.log(sum);

}
aggregateTable(['| Sofia  | 300',
       '| Veliko Tarnovo  | 500',
       '| Yambol          | 275']);

/*function aggregateTable(input) {
        let towns =[];
        let sum = 0;

        for(let line of input) {
            let tokens = line.split('|').filter(token => token !== '');
            let town = tokens[0].trim();
            let value = Number(tokens[1].trim());
            towns.push(town);
            sum += value;
        }

        console.log(towns.join(", "));
        console.log(sum);
    }
    */