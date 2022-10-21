let employee = [
  { person: "Swetha", age: "22", company: "Guvi" },
  { person: "Bharathi", age: "18", company: "Amazon" },
  { person: "Priya", age: "23", company: "Microsoft" },
];

// Normal For Loop to access the data inside the object

for (let i = 0; i < employee.length; i++) {
  //looping the properties
  console.log(`\nFor Loop: \nName: ${employee[i].person}`); //Printing name and for a space between three objects
  console.log(`Age: ${employee[i].age}`);
  console.log(`Company: ${employee[i].company}\n`);
}

/*Output for - For Loop: 
    For Loop:
    Name: Swetha
    Age: 22
    Company: Guvi

    For Loop:
    Name: Bharathi
    Age: 18
    Company: Amazon
 
    For Loop:
    Name: Priya
    Age: 23
    Company: Microsoft*/

// forEach Loop to access the data inside the object

employee.forEach((value) => {
  console.log(`\nForEach Loop: \nName: ${value.person}`);
  console.log(`Age: ${value.age}`);
  console.log(`Company: ${value.company}\n`);
});

/*Output for - forEach Loop: 

    ForEach Loop:
    Name: Swetha
    Age: 22
    Company: Guvi
   
    ForEach Loop:
    Name: Bharathi
    Age: 18
    Company: Amazon
 
    ForEach Loop:
    Name: Priya
    Age: 23
    Company: Microsoft*/

// For-in Loop to access the data inside the object

for (let data in employee) {
  console.log(`\nFor-in Loop \nName: ${employee[data].person}`); //calling the object and the property to print the datas
  console.log(`Age: ${employee[data].age}`);
  console.log(`Company: ${employee[data].company}\n`);
}

/*Output for - For-in Loop: 

    For-in Loop:
    Name: Swetha
    Age: 22
    Company: Guvi
   
    For-in Loop:
    Name: Bharathi
    Age: 18
    Company: Amazon
 
    For-in Loop:
    Name: Priya
    Age: 23
    Company: Microsoft*/

// For-of Loop

for (employee of employee) {
  console.log(`\nFor-of Loop\nName:${employee.person}`);
  console.log(`Age: ${employee.age}`);
  console.log(`Company: ${employee.company}\n`);
}

/*Output for - For-of Loop: 

    For-of Loop:
    Name: Swetha
    Age: 22
    Company: Guvi
   
    For-of Loop:
    Name: Bharathi
    Age: 18
    Company: Amazon
 
    For-of Loop:
    Name: Priya
    
    Age: 23
    Company: Microsoft*/
