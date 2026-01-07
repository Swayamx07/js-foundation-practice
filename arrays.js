// Program of reverse array
const arr = [10, 20, 30, 40, 50];
const reverse = arr.reverse();
console.log("reversed array:", reverse);

// Program of finding the maximum number
const numbers = [56, 37, 76, 90, 53];
let max = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Maximum number:", max);

//Even numbers from array
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = nums.filter(n => n % 2 === 0)
console.log("Even numbers:", evens);
