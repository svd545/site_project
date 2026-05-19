const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
nav.classList.toggle('active');
});

/* REVEAL */

const reveals = document.querySelectorAll('.reveal');

function revealSections() {

reveals.forEach(section => {

const windowHeight = window.innerHeight;
const revealTop = section.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){
section.classList.add('active');
}

});

}

window.addEventListener('scroll', revealSections);

revealSections();

/* HEADER EFFECT */

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

if(window.scrollY > 50){

header.style.background = 'rgba(8,15,30,0.9)';
header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';

}else{

header.style.background = 'rgba(8,15,30,0.7)';
header.style.boxShadow = 'none';

}

});

/* PARALLAX */

window.addEventListener('mousemove', e => {

const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

document.body.style.backgroundPosition =
`${x * 20}px ${y * 20}px`;

});