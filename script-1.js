let grade = parseInt(prompt("Enter student marks (0 - 100):"));//enter grade

const marks = (grade >= 0 && grade <= 100)//grade ranges between 0-100

if (marks) { 
    if (grade > 79) { //if grade is above 79 student scores A
        alert ("Your grade is A");
    } else if (grade >= 60) { //if grade is above 60 and below 79 student scores B 
        alert ("Your grade is B");
    } else if (grade >= 49) { //if grade is above 49 and below 60 student scores C
        alert ("Your grade is C");
    } else if (grade >= 40) {//if grade is above 40 and less than 49 student scores D
        alert ("Your grade is D");
    } else {//if grade is below 40 student scores E
        alert ("Your grade is E");
    }
}