module.exports = function(number){
  var base = 2
  var result = []
  if(number % base === 0){
    result.push(base)
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
