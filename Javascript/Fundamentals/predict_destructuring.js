//Problem #1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//Output prediction:
//console.log(randomCar):
//Tesla, Mercedes, Honda
//console.log(otherRandomCar):
//syntax error

//actual outputs:
//console.log(randomCar):
//Tesla
//console.log(otherRandomCar):
//Mercedes

//Problem #2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//predicted outcome:
//console.log(name):
//error for two variables called 'name'
//console.log(otherName):
//'Elon'

//actual output:
//predicted outcomes were correct

//Problem #3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//predicted output:
//console.log(password):
//12345
//console.log(hashedPassword):
//Phil Smith, 47, 6 feet

//actual output
//first was correct
//second was 'undefined' which makes sense because we didn't call on something specific within 'person'

//Problem #4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//predict the output:
//console.log(first==second):
//True
//console.log(first==third):
//True

//actual output:
// False for first one
//True for second

//Problem #5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //1
console.log(secondKey); //2
console.log(secondKey[0]); //3
console.log(willThisWork); //4

//predicted output:
//1: undefined
//2: undefined
//3: 1
//4: undefined

//actual output:
//1: value
//2: [1,5,1,8,3,3]
//3: 1
//4: 5

//after seeing the outputs I understand more how it works


