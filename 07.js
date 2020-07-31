let doraemon = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali
Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib
Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu
La... la... la...
Aku sayang sekali
Doraemon
La... la... la...
Aku sayang sekali`;

let lower = doraemon.toLowerCase()
let aku = (lower.match(/aku/g) || []).length;
let ingin = (lower.match(/ingin/g) || []).length;
let dapat = (lower.match(/dapat/g) || []).length;
console.log(aku);
console.log(ingin);
console.log(dapat);