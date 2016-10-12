module.exports = function(number){
  var base = 2
  var result = []
  if(number % base === 0){
    result.push(base)
    var dividedNumber = number/base
    if(dividedNumber > 1){
      result.push(dividedNumber)
    }
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
