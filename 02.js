const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

// const combined = first.concat((second.filter((item)=>first.indexOf(item < 0))).concat((third.filter((item)=>second.indexOf(item < 0))))).join(' ')
const combined = first.concat(second, third).join(' ')
console.log(combined)
