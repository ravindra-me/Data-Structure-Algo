
const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

function incSort([...array]) {
  let showap = false;
  do {
    showap = false
    for (let index = 0; index < array.length; index++) {
      if(array[index] > array[index+1]) {
        const temp = array[index];
        array[index] = array[index+1];
        array[index+1] = temp
        showap=true
      }
    }
  } while (showap);
  return array
}


function dicSort([...array]) {
  let showap = false;
  do {
    showap = false
    for (let index = 0; index < array.length; index++) {
      if(array[index] < array[index+1]) {
        const temp = array[index+1];
        array[index+1] = array[index]
        array[index] = temp;
        showap=true
      }
    }
  } while (showap);
  return array
}

console.log(dicSort(nums), incSort(nums))