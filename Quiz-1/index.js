function jumlah_kata(kalimat) {
    kalimat = kalimat.trim();
    return kalimat.split(' ').length;
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"

console.log(jumlah_kata(kalimat_1));
console.log(jumlah_kata(kalimat_2));