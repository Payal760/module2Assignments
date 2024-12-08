console.log("==============QUE.11===============")

//created a function using arrow function 
//a =1 and b=1 which shows default value 1
//returned the value of a and b
let sum = (a = 1, b = 1) => a * b
//multiplied 
console.log(sum(3, 4));
//default value
console.log(sum());

console.log("==============QUE.12===============")
//created a function using arrow function 
//implicitly returned value of square and cube
let getSquareAndCube = (num) => ({ square: num * 2, cube: num * 3 })
console.log(getSquareAndCube(5))

console.log("==============QUE.13===============")

const people = [{
    name: "Alice",
    address: {
        city: "New York",
        street: {
            name: "Broadway",
            number: 123
        }
    }
},
{
    name: "Bob",
    address: {
        city: "Los Angeles",
        street: {
            name: "Sunset Boulevard",
            number: 456
        }
    }
}];

const [{ name: name1, address: { city: city1, street: { name: streetName1 } } },
    { name: name2, address: { city: city2, street: { name: streetName2 } } }] = people

const result = [`${name1} lives in ${city1} on ${streetName1}`, `${name2} lives in ${city2} on ${streetName2}`];
console.log(result)

console.log("==============QUE.14===============")

const profile = {
    name: "Charlie",
    age: 29,
    address: {
        city: "San Francisco",
        zipcode: "94101"
    }
};

const updates = {
    age: 30,
    address: {
        zipcode: "94109",
        country: "USA"
    }
};

const finalUdates = {...profile, age:updates.age, address:{...profile.address,...updates.address}}
console.log(finalUdates)

