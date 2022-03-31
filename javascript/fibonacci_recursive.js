//n is the nth element in the fib array

function fibonacci(num) {

  var num1=0;
  var num2=1;
  var sum;
  var i=0;
  for (i = 0; i < num; i++) 
  {
      sum=num1+num2;
      num1=num2;
      num2=sum;
  }
  return num2;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
