// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var hasil1 = pertama.substring(0, 5).concat(pertama.substring(12, 19)).concat(kedua.substring(0, 8)).concat(kedua.substr(8, 10).toUpperCase())
console.log(hasil1);

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var sepuluh = parseInt(kataPertama);
var dua = parseInt(kataKedua);
var empat = parseInt(kataKetiga);
var enam = parseInt(kataKeempat);

var hasil2 = (sepuluh + enam) + (dua * empat);

console.log(hasil2);

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substr(25, 6);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);