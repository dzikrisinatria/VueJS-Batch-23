// Soal 1
const luasPersegiPanjang = (panjang, lebar) => {
    console.log(panjang * lebar);
}

const kelPersegiPanjang = (panjang, lebar) => {
    console.log((2*panjang) + (2*lebar));
}

let panjang = 10;
let lebar = 5;
luasPersegiPanjang(panjang, lebar);
kelPersegiPanjang(panjang, lebar);

// Soal 2
const newFunction = (firstName, lastName) => {
    return {
        fullName : () => {
            console.log(`${firstName} ${lastName}`)
        }
    }
}
   
//Driver Code 
newFunction("William", "Imoh").fullName()

// Soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const { firstName, lastName, address, hobby } = newObject

// Driver code
console.log(firstName, lastName, address, hobby)

// Soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log(combined)

// Soal 5
const planet = "earth"
const view = "glass"
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet
var after = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`

console.log(before);
console.log(after);