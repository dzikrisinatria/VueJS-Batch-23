// Soal 1
var daftarBuah = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
var n = daftarBuah.length;
var status;

function sorted(arr) {
    do {
        status = false;
        for (var i = 0; i < n; i++) {
            if (arr[i + 1] < arr[i]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                status = true;
            }
        }
    } while (status == true);
    return arr;
}
for (var k = 0; k < daftarBuah.length; k++){
    console.log(sorted(daftarBuah)[k]);
}

// Soal 2
function introduce(data) {
    console.log("Nama saya", data.name, ", umur saya", data.age, ", alamat saya di", data.address, ", dan saya punya hobby yaitu", data.hobby);
}

var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }

var perkenalan = introduce(data)
console.log(perkenalan)

// Soal 3
function hitung_huruf_vokal(kata) {
    var jumlah = 0;
    var hurufVokal = ['a', 'i', 'u', 'e', 'o'];
    kata = kata.toLowerCase();
    
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < hurufVokal.length; j++) {
            if (kata.charAt(i) == hurufVokal[j]) {
                jumlah += 1;
            }
        }
    }
    return jumlah;
}

var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1, hitung_2);

// Soal 4
function hitung(angka) {
    var hasil = (angka - 1) * 2;
    return hasil;
}
console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8