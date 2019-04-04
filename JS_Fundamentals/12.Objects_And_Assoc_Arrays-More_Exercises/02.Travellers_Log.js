function travellers(input) {

    let travellers = new Map();

    for (let i = 0; i < input.length; i++) {
        let data = input[i];

        if (data.match(/\w+ gets \d+/)) {
            data = data.split(" gets ");

            let name = data[0];
            let money = +data[1];

            if (!travellers.has(name)) {
                travellers.set(name, {
                    name: name,
                    country: new Map(),
                    money: 0
                })
            }

            travellers.get(name).money += money;
        } else {
            data = data.match(/(\w+) visited the (\w+) in (\w+) - (\d+)/);

            let name = data[1];
            let landmark = data[2];
            let country = data[3];
            let cost = +data[4];

            if (!travellers.has(name)) {
                console.log(`Not enough money to visit ${landmark}`);
            } else if (travellers.get(name).money < cost) {
                console.log(`Not enough money to visit ${landmark}`);
            } else {
                if (!travellers.get(name).country.has(country)) {
                    travellers.get(name).country.set(country, []);
                }

                if (!travellers.get(name).country.get(country).includes(landmark)) {
                    travellers.get(name).country.get(country).push(landmark);
                    travellers.get(name).money -= cost;
                }
            }
        }
    }