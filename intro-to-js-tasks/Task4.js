var a = isNaN('11'); // NaN means Not-a-Number, isNaN function represent that the value is number or not
console.log(a);

// output is false

var a = isNaN(2-10);
console.log(a);

// output is false

var a = isNaN("ADNAN");
console.log(a);

// output is true