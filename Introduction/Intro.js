// Javascript Codepolitan
// Alert message
const name = 'Muhammad Sidiq';
const age = 18;
alert("Hallo " + name + " Sekarang kamu berumur " + age);

// Tipe data
Object({halo:"dunia"});
    var Program = {ProgramName:"C", Difficult:"Intermediate"}
Array([1,2,3,4,5]);
    var ExArray = ['Blue','White','Black','Green','Navy'];
Number(10 + 155);
Boolean(true);
String("test world");

// Operator Aritmatika
// Pertambahan
const obj1 = 'Mencoba';     
const obj2 = 'Javascript';
const review = "Aku sedang " + obj1 + " " + obj2;

var x = 5 + 5;
var y = "5" + 5;
var z = "balonn saya " + 5;

// Perkalian
x = 20;
y = 40;
z = x*y;

var jumlah = 5;
var tipe = "Mobilio";
var compare = "Saya mempunya mobil dengan tipe " + tipe + " totalnya ada " + jumlah;

// Perulangan For, While, Do While Loop
var teks1 = "Program Pembelajaran JS ";
for(i=0; i<=5; i++){
    teks1 += "ini adalah nomor " + i;
}
// while
var i = 0;
while(i<10) {
    console.log("Saya bernilai " + i);
    i++;
}
// Do-while
do {
    console.log("Perulangan Do-while " + i);
    i++;
} while(i < 10);

// Pengkondisian
var quiz = "Apa Film Favourite mu";
var answer = "Avengers"
console.log(quiz += " Pilih salah satu");

// if-else if
if(answer == "Avengers") {
    console.log("Right my Favourite Film is " + answer);
} else if(answer == "Anime"){
    console.log("That's Right too!");
} else {
    console.log("Wrong answer!");
}

// switch case
switch(answer) {
    case "SAO":
        console.log("Yup...");
        break;
    case "KNY":
        console.log("Yup...");
        break;
    default:
        console.log("Wrong answer !");
}

// Fungsi Javascript
function name(parameter1, parameter2, parameter3)
{
    // code to be executed
}

function operator(x,y) {
    console.log("Proses perhitungan " + x + " dan " + y);
    return x * y;
}
    console.log(operator(5,20));
    console.log(operator(15,50));

function logic(a,b) {
    return (a + b) * (a,b) - (a,b);
}
    console.log(logic(45,90));

// Fungsi Array
var exArray = ["Satu","Dua","Tiga"];
const newArray = ["Genshin","Toram","Aq3D"];
console.log(exArray[0]);
console.log(newArray[2]);

// panjang program
newArray.length;
exArray.length;

// join and toString - Huruf
var lastArray = exArray[exArray.length - 1];
console.log(newArray.toString());
console.log(newArray.join(" - "));
console.log(exArray.toString() + " - " + exArray.join(" > ") + " - " + exArray.length);

// pop - pisah
exArray.pop();
exArray.pop(2);
var Arrays = newArray.pop();

// push - menambahkan
var pushArray = newArray.push("Mobelejen");
newArray.push("AQ3D");
newArray;

// combine - menggabungkan .concat
var combine = newArray.concat(exArray);
var combine = newArray.concat(exArray, lastArray);

// for - perulangan
var t1,i;
t1 = "<ul>";
for (i = 0; i < newArray.length; i++) {
    t1 += " " + newArray[i] + " ";
}
t1 += "</ul>";

// forEach - untuk setiap perulangan
var t1, i;
t1 = "<ul>";
newArray.forEach(Arraybaru);
t1 = "</ul>";

function Arraybaru(value) {
    t1 += "<li>" + value + "</li>";
}

// iterasi metode .map
// .map() : membuat array baru dgn melakukan fungsi pada setiap elemen array.
// index : urutan angka | value : nilai angka
var no1 = [5, 10, 15, 20, 25, 30];
var no2 = no1.map(dikaliDua);

function dikaliDua(value, index, array) {
    return value * 2;
}

// Object Javascript
"Pada Javascript Object terdiri dari name & value(value) atau method(fungsi)";
var Mobil = {
    nama :"Toyota", 
    tipe :"Kijang Innova", 
    berat:"800", 
    warna:"Hitam",

    maju : function() {
        return "Mobil melaju";
    },
    mundur : function() {
        return "Mobil mundur";
    }
};


// Javascript WPU
// Pop-up box Js
alert('This is alert message')
var name = prompt('Input your name');
var email = prompt('Input email'); alert(email);
confirm('Are you sure');

// Program Pop-up box sederhana if-else
var object = prompt('Program Pemilihan Universitas')
var valid = confirm("Apakah kamu yakin dengan jawabanmu?");
if(valid == true) {
    alert('Pilihanmu adalah ' + object);
} else {
    alert('Anda mengagalkan opsi pilihan!');
}

// Pop-up box while
alert('Welcome!');
var loop = true;
while(loop == true) {
    var email = prompt('Masukkan email');
    alert('Emailmu adalah ' + email);

    loop = confirm('Try again!');
}
    alert('Thanks, Sudah mampir');

// Pengulangan - while
var ulang = true;
while(ulang) {
    alert('Coba pencet itu!');
    ulang = confirm('Lagi ?');
}
    alert('Haha, Wellplayed bro!');

var nilai1 = prompt('Masukkan nilai');
while(nilai1 <= 10) {
    console.log('Perulangan while');
    nilai1++;
}
    alert('Terimakasih..');

// Latihan - while
var jmlangkot = 1;
while(jmlangkot <= 10) {
    console.log('Angkot No. ' + jmlangkot + ' beroperasi dengan baik.')
    jmlangkot++;
}
