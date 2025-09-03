// 1st 
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(5, 7);
console.log(result); 

// 2nd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return num + " is Even";
    } else {
        return num + " is Odd";
    }
}
console.log(checkEvenOdd(11));

// 3rd
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a + " is the maximum";
    } else if (b >= a && b >= c) {
        return b + " is the maximum";
    } else {
        return c + " is the maximum";
    }
}
console.log(findMax(10, 19, 15));

// 4th
function reverseString(str) {
    return str.split("").reverse();
}
console.log(reverseString("hello"));

// 5th
function palindrome(s,start=0,end=s.length-1)
{
    if(start>=end)
    {
        return true;
    }
    if(s[start]!==s[end])
    {
        return false;
    }
    return palindrome(s,start+1,end-1)
}
console.log(palindrome("madam"));

// 6th
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return  count + " vowels.";
}
console.log(countVowels("hello"));

// 7th
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(8));

// 8th
function fibonacci(n) {
    let sequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}
console.log("Fibonacci(10): " + fibonacci(10));

// 10th
function calculator(a, b, operation) {
    switch(operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b !== 0) {
                return a / b;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Invalid operation";
    }
}
console.log(calculator(15, 3, "add"));
console.log(calculator(10, 4, "subtract"));
console.log(calculator(66, 7, "multiply"));
console.log(calculator(200, 5, "divide"));














