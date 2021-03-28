function jumlah_kata(kalimat) {
    kalimat = kalimat.trim();
    return kalimat.split(' ').length;
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"

console.log(jumlah_kata(kalimat_1));
console.log(jumlah_kata(kalimat_2));

// Soal 2
function next_date(tanggal, bulan, tahun) {
    var jumlahHari = 0;

    switch (bulan) {
        case 1: { jumlahHari = 31; break;}
        case 2:
            if (tahun % 4 == 0) {
                jumlahHari = 29;
            } else {
                jumlahHari = 28;
            }
            break;
        case 3: { jumlahHari = 31; break;}
        case 4: { jumlahHari = 30; break;}
        case 5: { jumlahHari = 31; break;}
        case 6: { jumlahHari = 30; break;}
        case 7: { jumlahHari = 31; break;}
        case 8: { jumlahHari = 31; break;}
        case 9: { jumlahHari = 30; break;}
        case 10: { jumlahHari = 31; break;}
        case 11: { jumlahHari = 30; break;}
        case 12: { jumlahHari = 31; break;}
        default:
            break;
    }

    if (tanggal < jumlahHari) {
        tanggal++;
    } else if (tanggal == jumlahHari){
        tanggal = 1;
        if (bulan == 12) {
            bulan = 1;
            tahun++;
        } else {
            bulan++;
        }
    }

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

    console.log(tanggal, bulan, tahun);
}

var tanggal = 29
var bulan = 2
var tahun = 2020

next_date(tanggal , bulan , tahun ) // output : 1 Maret 2020

var tanggal = 28
var bulan = 2
var tahun = 2021

next_date(tanggal , bulan , tahun ) // output : 1 Maret 2021

var tanggal = 31
var bulan = 12
var tahun = 2020

next_date(tanggal , bulan , tahun ) // output : 1 Januari 2021