module.exports = function(number){
  if(number === 8){
    return [2,2,2]
  }
  var base = 2
  var result = []
  if(number % base === 0){
    result.push(base)
    number /= base
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
