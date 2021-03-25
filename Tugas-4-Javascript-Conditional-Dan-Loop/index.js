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
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sorted = daftarBuah.sort()

for (var i = 0; i < 5; i++) {
    console.log(sorted[i])
}