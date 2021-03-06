var expect = require('chai').expect
var getPrimeFactors = require('../getPrimeFactors.js')

describe("prime factor", function(){
  it("should be [] for 1", function(){
    expect(getPrimeFactors(1)).to.be.eql([])
  })
  it("should be [2] for 2", function(){
    expect(getPrimeFactors(2)).to.be.eql([2])
  })
  it("should be [3] for 3", function(){
    expect(getPrimeFactors(3)).to.be.eql([3])
  })
  it("should be [2,2] for 4", function(){
    expect(getPrimeFactors(4)).to.be.eql([2,2])
  })
  it("should be [2,3] for 6",function(){
    expect(getPrimeFactors(6)).to.be.eql([2,3])
  })
  it("should be [2,2,2] for 8", function(){
    expect(getPrimeFactors(8)).to.be.eql([2,2,2])
  })
  it("should be [3,3] for 9", function(){
    expect(getPrimeFactors(9)).to.be.eql([3,3])
  })
})
