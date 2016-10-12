module.exports = function(number){
  var base = 2
  var result = []
  while(number % base === 0 && number > 1){
    result.push(base)
    number /= base
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
