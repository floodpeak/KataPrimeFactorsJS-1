module.exports = function(number){
  var base = 2
  var result = []
  while(base<number){
    for(;number % base === 0;number /= base){
      result.push(base)
    }
    base++
  }
  for(;number % base === 0;number /= base){
    result.push(base)
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
