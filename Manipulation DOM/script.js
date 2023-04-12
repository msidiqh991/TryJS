 // Strengthen your Javascript Fundamentals

 // - Manipulate Element
 // Inner HTML
const sectionB = document.querySelector('section#b');
sectionB.innerHTML = 'Section B';

// Property CSS
const judul = document.querySelector('#judul');
judul.innerHTML = 'Manip - element';
judul.style.color = 'white';
judul.style.backgroundColor = 'cornflowerblue';

// Menambah Attribute
const title = document.getElementsByTagName('h1')[0];
title.setAttribute('name', 'Subheader');

// Elemen classList with querySelector -> Tambah class
const p1 = document.querySelector('.p1');
p1.classList.add('title');

const titleTwo = document.getElementsByTagName('h2')[0];
titleTwo.classList.add('bg-clr');
titleTwo.style.color = "white";
titleTwo.style.backgroundColor = "orange";

// Get all element classList with toggle -> Menunjuk class
document.body.classList.toggle('passive');


// - Manipulate Node
// create element
const praBaru = document.createElement('p');
const newList = document.createElement('li');

// text node
const teksBaru = document.createTextNode('Menambahkan textnode');
const teksList = document.createTextNode('List telah ditambahkan');

// append child -> Save text to Paragraph
praBaru.appendChild(teksBaru);
newList.appendChild(teksList);

// save praBaru in end of Section A
const SectionA = document.getElementById('bagianA');
SectionA.appendChild(praBaru);

// parenting -> :nth-child(2) = choose the second order list item
const ul = document.querySelector('section#bagianB ul');
const li2 = ul.querySelector('li:nth-child(2)');

// insertBefore
ul.insertBefore(newList, li2);
// removeChild
const link = document.getElementsByTagName('a')[0];
SectionA.removeChild(link);

// replaceChild
const bagianB = document.getElementById('bagianB');
const text4 = bagianB.querySelector('p');   // -> node lama
const newH4 = document.createElement('h4'); // -> node baru
const H4txt = document.createTextNode('Title - Bagian B');
newH4.appendChild(H4txt);
bagianB.replaceChild(newH4, text4);

// styling -> coral : new code
newH4.style.backgroundColor = 'coral';
praBaru.style.backgroundColor = 'coral';
newList.style.backgroundColor = 'coral';