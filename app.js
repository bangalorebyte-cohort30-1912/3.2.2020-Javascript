console.log("hello world")

// var name = 'jithin'
// console.log("My name is "+name)
// console.log("My name is",name)
// console.log(`My name is ${name}`)

// let age = 30
// console.log(`My name is ${name} and I'm ${age} years old`)

// const job = "Instructor"
// console.log(`My name is ${name} and I'm ${age} years old and I'm an ${job} at byte academy`)

// age = age+1
// name ="jithin j kumar"
// // job = "Python Developer"
// console.log(`My name is ${name} and I'm ${age} years old and I'm an ${job} at byte academy`)

// // -> understand the difference between VAR, LET and CONST

// let isTrainer = true
// let salary
// console.log(typeof(age))

// const data = ['jithin', 30, isTrainer, salary]
// console.log(`My name is ${data[0]} and I'm ${data[1]}. I'm ${data[2]} at Byte Academy with salary ${data[3]}`);

// data.push("something")
// data[2] = false
// console.log(data.length);

const person = {
    name:'jithin',
    age:'30',
    isTrainer: true,
    languages:['python','javascript']
}
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))

person.city = 'kochi'
person.languages.push('java')


person.address = {
    streetname:'madiwala',
    city:'bangalore'
}

person.address.streetname = 'indiranagar'
console.log(person)

const todos = [
    {
        id: 1,
        text: 'learning javascript',
        isComplete:true
    },
    {
        id: 2,
        text: 'learning arrays',
        isComplete:false
    },
    {
        id: 3,
        text: 'creating a small js app',
        isComplete:true
    }
]

console.warn("Simple for loop");
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text)
}

console.warn("simple while loop");
let i =0
while(i<todos.length){
    console.log(todos[i].text);
    i++    
}

console.warn("simple do while loop");
let j =0
do{
    console.log(todos[j].text)
    j++    
}while(j<todos.length)

console.warn("For of Loop");
for(let todo of todos){
    console.log(todo.text);    
}

console.warn("simple Function");
function printTodoText(todo){
    console.log(todo.text)
}

printTodoText(todos[0])
console.warn("For each function");
todos.forEach(printTodoText) 

function Student(name, age, batch){
    this.name = name
    this.age = age
    this.batch = batch

    this.birthyear = function(age){
        return new Date().getFullYear()-this.age
    }
}

const student1 = new Student('jithin', 30, 1912)
console.log(student1.birthyear());

// Conditions
console.warn("Conditions");
function printCompletedTodoText(todo) {
    todo.isComplete ? console.log(todo.text): console.log("Not Completed")
}

function withIf(todo){
    if(todo.isComplete){
        return console.log(todo.text);        
    }else{
        return console.log("Not Completed");        
    }
}
todos.forEach(withIf)

console.warn("Arrow Functions");
const printText = (todo) => todo.isComplete ? console.log(todo.text) : console.log("Not Completed");

todos.forEach(printText)

// currentDate = new Date()
// console.log(currentDate.getFullYear())









