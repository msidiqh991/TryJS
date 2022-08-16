// Inner HTML
const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Section A';

const sectionB = document.querySelector('section#b');
sectionB.innerHTML = 'Section B';

// Property CSS
const judul = document.querySelector('#judul');
judul.innerHTML = 'Title website';
judul.style.color = 'white';
judul.style.backgroundColor = 'cornflowerblue';

// Menambah Attribute
const title = document.getElementsByTagName('h1')[0];
title.setAttribute('name', 'Subheader');

// Elemen classList with querySelector
const p1 = document.querySelector('.p1');
p1.classList.add('title');

// Get all element classList with toggle
// document.body.classList.toggle('biru-muda');
  