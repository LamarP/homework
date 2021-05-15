 /*
    Tabulation

    Tabulating Fib

    create a table(array) and fill it out with elements.
 */
//make change

function tabulatedFib(n) {
    // create a blank array of length 'n'
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];

}

console.log(tabulatedFib(7));