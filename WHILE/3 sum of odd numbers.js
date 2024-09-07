

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */


let i=81;
let x=0, y=0;
while(i<=131){
    if(i%2!=0){
        x=x+i;
    }
    i++;
}

i=206
while(i<=311){
    if(i%2==0){
        y=y+i;
    }
    i++;
}

console.log(x)
console.log(y)