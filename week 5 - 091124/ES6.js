// biến local, global
const N = 2024;
function day() {
    console.log(N);
}
console.log(N);
day();

var x = 5;
var j = 10;
console.log('x ban đầu:' + x)
console.log('j ban đầu:' + j)
if (x == 5) {
    var x = 899999999;
    let j = 1010101
    console.log('x local dùng var:' + x);
    console.log('j local dùng let:' + j);
}
console.log('j mới dùng let:' + j);
console.log('x mới dùng var:' + x);


// import biến A
import {A} from './ES6 default parameters.js';
console.log(A);


function computeMultiplyMatrix(A, b=1) {

    const rows = A.length;
  const cols = A[0].length;

  const result = [];
  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = A[i][j] * scalar;
    }
  }

  return result;
}
computeMultiplyMatrix(A);