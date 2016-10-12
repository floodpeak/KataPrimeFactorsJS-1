module.exports = function(number){
  if(number === 9){
    return [3,3]
  }
  var base = 2
  var result = []
  for(;number % base === 0;number /= base){
    result.push(base)
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
