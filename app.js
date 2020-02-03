console.log("hello world")

var name = 'jithin'
console.log("My name is "+name)
console.log("My name is",name)
console.log(`My name is ${name}`)

let age = 30
console.log(`My name is ${name} and I'm ${age} years old`)

const job = "Instructor"
console.log(`My name is ${name} and I'm ${age} years old and I'm an ${job} at byte academy`)

age = age+1
name ="jithin j kumar"
// job = "Python Developer"
console.log(`My name is ${name} and I'm ${age} years old and I'm an ${job} at byte academy`)

// -> understand the difference between VAR, LET and CONST

let isTrainer = true
let salary
console.log(typeof(age))

const data = ['jithin', 30, isTrainer, salary]
console.log(`My name is ${data[0]} and I'm ${data[1]}. I'm ${data[2]} at Byte Academy with salary ${data[3]}`);

data.push("something")
data[2] = false
console.log(data.length);









