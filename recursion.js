function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence[n];
}

let array = [10, [12, 14, [1], [16, [20]]], 10, 11]

let arr = [];
function convertOneArray(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Array.isArray(element)) {
            convertOneArray(element)
            
        } else {
            arr.push(element)
        }
    }
    return arr;
}



function sumOfArrayElm(array) {
    let sum =0
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (Array.isArray(element)) {
          sum+= sumOfArrayElm(element)
        } else {
          sum+= element
        }
    }
    return sum;
}



// factorials

let fact =1
function factorials(num) {
    if (num < 2) return 1
    return num*factorials(num-1)
}

console.log(factorials(5))


console.log(convertOneArray(array))
console.log(sumOfArrayElm(array))

console.log(fibonacci(5))


