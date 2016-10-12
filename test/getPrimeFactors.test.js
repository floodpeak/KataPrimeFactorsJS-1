var expect = require('chai').expect
var getPrimeFactors = require('../getPrimeFactors.js')

describe("prime factor", function(){
  it("should be [] for 1", function(){
    expect(getPrimeFactors).to.be.eql([])
  })
})
