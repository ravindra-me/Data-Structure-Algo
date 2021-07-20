const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

function incSort([...array]) {
    for (let index = 1; index < array.length; index++) {
        let numberToInsert = array[index];
        let j;
        for (j = index - 1; array[j] > numberToInsert && j >= 0; j--) {
            array[j+1] = array[j]
        }
        array[j+1] = numberToInsert
  }
  return array
}






console.log(incSort(nums))