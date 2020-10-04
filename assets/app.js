// CHARGEMENT DE LA PAGE =======================================================
function onReady(callback) {
  let intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 500);
}

function setVisible(selector, visible) {
  //Change le style de l'élément en fonction de ses paramètres via un Booléen
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

//Se lance après la fonction callback, récupère la valeur de la page et de l'écran de chargement et leurs assigne 2 paramètres   
onReady(function() {
  setVisible('#page', true);
  setVisible('#loading', false);
});

// =================== Changement de taille de la NAV ==============
window.onscroll = function() {scrollFunction()};
let Nav = document.getElementById("navbar");
let Link = document.getElementById("logo");


function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  Nav.classList.remove("big_nav");
  Nav.classList.add("small_nav");
} else {
  Nav.classList.add("big_nav");
  Nav.classList.remove("small_nav");
}
}

// =================== Navigation Avec Le Slider ===========================
let classic = document.getElementById('classic');
let metal = document.getElementById('metal');
let alien = document.getElementById('alien');
let Belsinski = document.getElementById('belsinski');
const slider = [classic, metal, alien, belsinski];



let pre = document.getElementById('pre');
let sui = document.getElementById('sui');

pre.onclick = SlideLess;
sui.onclick = SlideMore;

function SlideMore(){
if (count < 3){
  slider[count].classList.remove('block');
  count ++;
  slider[count].classList.add('block'); 
}
else{
  slider[count].classList.remove('block');
  count = 0;
  slider[count].classList.add('block'); 
}
}

function SlideLess(){
if (count >0){
  slider[count].classList.remove('block');
  count --;
  slider[count].classList.add('block'); 
}else{
  slider[count].classList.remove('block');
  count = 3;
  slider[count].classList.add('block'); 
}
}

// ======================= Apparition des section au click ====================
let block = "PresG";
let presGeneral = document.getElementById('presG');
let presClassic = document.getElementById('presClassic');
let presMetal = document.getElementById('presMetal');
let presAlien = document.getElementById('presAlien');
let presBelsinski = document.getElementById('presBelsinski');

classic.onclick = showClassic;
metal.onclick = showMetal;
alien.onclick = showAlien;
belsinski.onclick = showBelsinski;

function showClassic(){
  block = "classic";
  showArticle();
}

function showMetal(){
  block = "metal";
  showArticle();
}

function showAlien(){
  block = "alien";
  showArticle();
}

function showBelsinski(){
  block = "belsinski";
  showArticle();
}

function showArticle(){
  if (block === 'classic'){
    presGeneral.classList.remove('block');
    presClassic.classList.add('block');
    presMetal.classList.remove('block');
    presAlien.classList.remove('block');
    presBelsinski.classList.remove('block');
  }
  else if (block === 'metal'){
    presGeneral.classList.remove('block');
    presClassic.classList.remove('block');
    presMetal.classList.add('block');
    presAlien.classList.remove('block');
    presBelsinski.classList.remove('block');
  }
  else if (block === 'alien'){
    presGeneral.classList.remove('block');
    presClassic.classList.remove('block');
    presMetal.classList.remove('block');
    presAlien.classList.add('block');
    presBelsinski.classList.remove('block');
  }
  else if (block === 'belsinski'){
    presGeneral.classList.remove('block');
    presClassic.classList.remove('block');
    presMetal.classList.remove('block');
    presAlien.classList.remove('block');
    presBelsinski.classList.add('block');
  }
}