let a, b, c; 
a = 5;
b = 6;     
// + operation   
c = a + b; 
console.log(c) ;

// - operation
c = a - b;
console.log(c);

// *operation 
c = a * b;
console.log(c);

// / operation
c = a / b;
console.log(c);

// == operation 
if (a == b ) {
    console.log("a and b are equal");
} else {
    console.log("a and b are not equal");
}

// === operation 
if (a === b) {
    console.log("a and b are equal and of same type");
} else {
    console.log("a and b are not equal or of different type");
}


// Object
let person = {
    name: "Ali",
    age: 21,
    gender: "male",
};

console.log(person.name);
console.log(person.age);
console.log(person.gender);

// Arrays 
let arr = [1,6,8,2,7,3,5,4] ;
console.log(arr);
//arr.sort(function(a, b){return a - b});

function sortArray(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
}

console.log(sortArray(arr));