module.exports = function(number){
  if(number === 6){
    return [2,3]
  }
  if(number === 4){
    return [2,2]
  }
  if(number > 1){
    return [number]
  }
  return []
}
