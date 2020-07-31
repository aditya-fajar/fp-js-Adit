const number = Array.from(Array(1001).keys()).slice(1)

const even = number.filter(x => x % 2 === 0)

const odd = number.filter(x => x % 2 === 1)

const multiple5 = number.map(x => x * 5)

const prime = number.filter((num) => {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;
  })

const primeunder100 = number.filter((num) => {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;
  }).filter(x=> x<100)




console.log(even)
console.log(odd)
console.log(multiple5)
console.log(prime)
console.log(primeunder100)

