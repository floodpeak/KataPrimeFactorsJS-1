module.exports = function(number){
  var base = 2
  if(number % 2 === 0){
    var result = [base]
    if(number/base !== 1){
      result.push(number/base)
    }
    return result
  }
  if(number > 1){
    return [number]
  }
  return []
}
