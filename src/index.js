
exports.min = function min (array) {

  if(!Array.isArray(array)){
    return 0;
  } else if(array.length == 0){
    return 0;
  }

  let minimum = array[0];
  for(let i = 0; i < array.length; i++){
    if(minimum > array[i]){
      minimum = array[i];
    }
  }
  return minimum;
}

exports.max = function max (array) {

  if(!Array.isArray(array)){
    return 0;
  } else if(array.length == 0){
    return 0;
  }

  let maximum = array[0];
  for(let i = 0; i < array.length; i++){
    if(maximum < array[i]){
      maximum = array[i];
    }
  }
  return maximum;
}

exports.avg = function avg (array) {

  if(!Array.isArray(array)){
    return 0;
  } else if(array.length == 0){
    return 0;
  }

  let average = 0;
  for(let i = 0; i < array.length; i++){
    average += array[i];
  }
  return average/array.length;
}
