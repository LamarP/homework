// function madLib(verb, adj, noun) {
//   return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
// }
// function madLib(verb, adj, noun) {
//   return 'We shall ' + verb.toUpperCase() + ' the ' + adj.toUpperCase() +' '+ noun.toUpperCase()
// }

// console.log(madLib('run', 'aggressive', 'Dog'));

// function isSubstring(searchString, subString) {
//   return searchString.includes(subString)
// }

// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));

// function fizzBuzz(array) {
//   var newArr = []
//   for (var i = 1; i < array.length; i++) {
//     var el = array[i]
//     if ((el % 3 === 0) ^ (el % 5 === 0)) {
//       newArr.push(el)
//     }
//   };
//   return newArr
// }

// console.log(fizzBuzz([1, 2, 3, 4, 5, 15]));

function isPrime(num) {
  if (num < 2) { return false; }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(3));
// console.log(isPrime(2));
// console.log(isPrime(7));
// console.log(isPrime(4));

function sumOfNPrimes(n) {
  let primes = 0;
  let sum = 0;
  for (let i = 2; i < primes; i++) {
    if (isPrime(i)) {
      sum += i;
      primes++;
    }
  }
  return sum;
}
// function sumOfNPrimes (n) {
//   let sum = 0;
//   let countPrimes = 0;
//   let i = 2;

//   while (countPrimes < n) {
//     if (isPrime(i)) {
//       sum += i;
//       countPrimes++;
//     }
//     i++;
//   }

//   return sum;
// }

  console.log(sumOfNPrimes(8));

