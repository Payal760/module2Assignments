console.log("==============================QUE-11===================================")

let arr = [
    { name: "laptop", price: 1000 },
    { name: "Mouse", price: 20 }];

function processProducts(arr) {
    let productNames = arr.map((product) => product.name);
    arr.forEach((product) => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });
}

processProducts(arr);

console.log("==============================QUE-12===================================")

let students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }];

let processStudents = (studentsArr) => {
    //Filter the students to create a new array of students who scored above 60 marks.
    let filteredStudents = studentsArr.filter(({ marks }) => marks > 60);

    //Sort the filtered array in descending order of marks.
    let sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);

    //Map the sorted array to extract only the names of the students.
    let passedStudents = sortedStudents.map(({ name }) => name);

    //Return the array of sorted names.
    return passedStudents;
}
console.log(processStudents(students))

console.log("==============================QUE-13===================================")

let arrOfProducts = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

//Use reduce() to group the categories and count how many times each category appears.
let countOfProducts = arrOfProducts.reduce((acc, ele,) => {
    acc[ele] ? acc[ele] += 1 : acc[ele] = 1;
    return acc

}, {});
console.log(countOfProducts)

//extra challange 
let count = Object.entries(countOfProducts);
//sort the categories by their counts in descending order and return an array of sorted categories.
let sortedProducts = count.sort((a, b) => b[1] - a[1])
console.log(sortedProducts)

console.log("==============================QUE-14===================================")

let employeeDetails = [{ name: "Alice", tasksCompleted: 8, rating: 4.7 },
{ name: "Bob", tasksCompleted: 4, rating: 4.0 },
{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },
{ name: "David", tasksCompleted: 10, rating: 4.9 },
{ name: "Eve", tasksCompleted: 7, rating: 2.8 }];

//Filter the employees who have completed more than 5 tasks.
let filteredDataOfEmployee = employeeDetails.filter((ele) => ele.tasksCompleted > 5);
console.log(filteredDataOfEmployee);

//Map the filtered employees to a new array that contains only the employee's name and their performance level. 
let newData = filteredDataOfEmployee.map((ele) => ({
    name: ele.name,
    //If rating is above 4.5, their performance level is "Excellent".
    //If rating is between 3 and 4.5 (inclusive), their performance level is "Good".
    //Otherwise, their performance level is "Needs Improvement".
    performanceLevel: ele.rating > 4.5 ? "Excellent" : ele.rating > 3 && ele.rating <= 4.5 ? "Good" : "Needs Improvement"
}));
console.log(newData);

//Sort the final array of employees in descending order based on their performance level
let sortedPerformance = newData.sort((a,b)=>{
    if(a.performanceLevel > b.performanceLevel){
        return 1
    }else if(a.performanceLevel < b.performanceLevel){
        return -1
    }else{
        return 0
    }
})
console.log(sortedPerformance)