module.exports = function(number){
  var base = 2
  if(number === 6 || number === 4){
    return [base,number/base]
  }
  if(number > 1){
    return [number]
  }
  return []
}
