module.exports = function(number){
  var result = []
  for(var base = 2;number > 1;base++){
    for(;number % base === 0;number /= base){
      result.push(base)
    }
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
