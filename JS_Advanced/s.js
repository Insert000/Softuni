const reverseSeq = n => {
   let result ;
    for (let i = n; i > 0; i--) {
        if (n!==0) {
            result = i;

            console.log(result.join(", "));
        }
    }
};
reverseSeq(5);