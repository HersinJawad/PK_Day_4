const c = 1
{
    const c = 2
}

console.log(c)
let grade = 70

if (grade >= 90) {
    console.log("A")
} else if (grade >= 80) {
    console.log("B")
} else if (grade >= 70) {
    console.log("C")
} else if (grade >= 60) {
    console.log("D")
} else {
    console.log("F")
}


let animal = "Giraffe"
switch (animal) {
    case "cow":
        console.log("this is Cow")
        break
    case "Giraffe":
        console.log("this is Giraffe")
        break;
    case "Dog":
        console.log("this is Dog")
        break;
    case "Pig":
        console.log("this is pig")
        break;
    default:
        console.log("this is not animal")
        break;
}

let text = ""
for (i = 0, i < 5; i++) {
    text += i + ","
    console.log(text)
}

let person = { FirstName: "Jhon", LastName: Doe, age: 25 }
let text1 = ""
for (let x in person) {
    text1 += person(x) + " "
}
