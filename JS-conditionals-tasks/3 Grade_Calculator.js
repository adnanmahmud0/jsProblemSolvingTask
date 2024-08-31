/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var result = 80

if(result <= 100 && result >= 90){
    console.log('A')
}
else if(result <= 89 && result >= 80){
    console.log('B')
}
else if(result <= 79 && result >= 70){
    console.log('C')
}
else if(result <= 69 && result >= 60){
    console.log('D')
}
else if(result <= 59 && result >= 0){
    console.log('F')
}
