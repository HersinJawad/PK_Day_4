console.log('loading');
const h1 = document.querySelector('h1');
// console.log(h1.text);
// console.assert(document.querySelector('h2'), 'h2 not found!')
const numbers = [
    { first: "Neil", last: "Amstrong" },
    { first: "Adam", last: "khan" },
    { first: "Budi", last: "handara" },
]

console.table(numbers)
let number = 1
let stringe = `pesantren coding $(number)`
// console.log(string)
let info = ["irst", "second", "third"]
console.log(info[0]) //second
console.log(info.length) //array method
let plus = 1 + 1

let minus = 2 - 3
let modulus = 7 % 2
let multiple = 4 * 5
console.log(plus)
console.log(minus)
console.log(modulus)
console.log(multiple)

let integer = 8
let comparison = integer == "8"
let comparison1 = integer !== 8
console.log(comparison)
console.log(comparison1)

// let comparison2 = integer = 12 && interger === 8 ||
// console.log(comparison2)

if (integer === 12 && integer === 8) {
    console.log("ini benar")
} else {
    console.log("ini tidak bener")
}

let result = Math.round(4.7)
console.log(result)

for (let i = 0; i <= 9; i++) {
    console.log(1)
    // document.getElementById("id").innerHTML = +

    // < ul >
    // <li>${i}</li >
    // </ul >
}

let currentDate = new Date()
console.log(currentDate)

let year = currentDate.getFullYear()
console.log(`this year is ${year}`)

let month = currentDate.getMonth()
console.log(`this year is ${month}`)

let Date = currentDate.getDate()
console.log(`this year is ${date}`)