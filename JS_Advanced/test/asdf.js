let expect = require('chai').expect;

function sumOfTwoNums(first,second) {
    let result = first+second;
    return result;
}

describe("im demo test",function () {
   it("should return",function () {
       expect(sumOfTwoNums(15,30)).to.be.equal(45);
   })
});