// Soal 1
var nilai = 75;
var indeks;

if (nilai >= 85) {
    indeks = 'A';
} else if (nilai >= 75 && nilai < 85) {
    indeks = 'B';
} else if (nilai >= 65 && nilai < 75) {
    indeks = 'C';
} else if (nilai >= 65 && nilai < 55) {
    indeks = 'D';
} else if (nilai < 55) {
    indeks = 'E';
}

console.log(indeks);

// Soal 2
var tanggal = 9;
var bulan = 7;
var tahun = 2000;

switch (bulan) {
    case 1: { bulan = 'Januari'; break; }
    case 2: { bulan = 'Februari'; break; }
    case 3: { bulan = 'Maret'; break; }
    case 4: { bulan = 'April'; break; }
    case 5: { bulan = 'Mei'; break; }
    case 6: { bulan = 'Juni'; break; }
    case 7: { bulan = 'Juli'; break; }
    case 8: { bulan = 'Agustus'; break; }
    case 9: { bulan = 'September'; break; }
    case 10: { bulan = 'Oktober'; break; }
    case 11: { bulan = 'November'; break; }
    case 12: { bulan = 'Desember'; break; }
}

console.log(tanggal, " ", bulan, " ", tahun);

// Soal 3
var n = 7;
var hasil = '';

for (var i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        hasil += '#';
    }
    hasil += '\n';
}

console.log(hasil);

// Soal 4
var m = 7;

for (var i = 1; i <= m; i++) {
    if (i % 3 == 1) {
        console.log(i, "- I love programming");
    } else if (i % 3 == 2) {
        console.log(i, "- I love Javascript");
    }
    if (i % 3 == 0) {
        console.log(i, "- I love VueJS");
        var samadengan = '';
        for (var j = 1; j <= i; j++){
            samadengan += '=';
        }
        console.log(samadengan);
    }
}