//Create and Access object
const student = {
    name: "Swayam",
    branch: "AIML",
    year: 3
};

console.log(student.name);
console.log(student.year);

//Add property
student.college = "Tier 3 Engineering college";
console.log(student);

//Loop through object 
for (let key in student) {
    console.log(key + "+", student[key]);
}