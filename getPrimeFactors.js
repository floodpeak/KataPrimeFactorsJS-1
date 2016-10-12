module.exports = function(number){
  var result = []
  for(base = 2;base<number;base++){
    for(;number % base === 0;number /= base){
      result.push(base)
    }
  }
  if(number > 1){
    result.push(number)
  }
  return result
}
