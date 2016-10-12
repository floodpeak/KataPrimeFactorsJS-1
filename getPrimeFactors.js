module.exports = function(number){
  var base = 2
  var result = []
  if(number % base === 0){
    result.push(base)
    number /= base
  }
  if(number === 4){
    result.push(2)
    number /= 2
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
