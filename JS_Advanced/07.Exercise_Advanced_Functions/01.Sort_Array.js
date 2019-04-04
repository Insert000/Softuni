function sortArray(array, method) {
    let ascendingComparator = (a, b) => a-b;
    let descendingComparator = (a, b) => b-a;

    let sortingStrategies = {
        asc: ascendingComparator,
        desc: descendingComparator
    };

    return array.sort(sortingStrategies[method]);
}
input(["rat 10|bat 20|potion 10|rat 10|chest" +
       " 100|boss 70|chest 1000"]);
