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
    document.querySelector(selector).style.display = visible ? 'flex' : 'none';
  }
  
  //Se lance après la fonction callback, récupère la valeur de la page et de l'écran de chargement et leurs assigne 2 paramètres   
  onReady(function() {
    setVisible('#page', true);
    setVisible('#loading', false);
  });
  
  onReady(function(){
    wheelHandler();
  })
  
  // CHARGEMENT DE LA PAGE =======================================================
  
  // GET LES DIFFÉRENTS ÉCRANS DE LA PAGE =========================================
  
  let header = document.getElementById("Header");
  let present = document.getElementById("Present");
  let classic = document.getElementById("Classic");
  let metal = document.getElementById("Metal");
  let alien = document.getElementById("Alien");
  const ids = [header, present, classic, metal, alien];
  let count = 0;
  
  // GET LES DIFFÉRENTS ÉCRANS DE LA PAGE =========================================
  
  // EVENT SUR LE SWIPE HAUT/BAS D'UN SMARTPHONE ===================================
  
  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);
  
  let xDown = null;                                                        
  let yDown = null;                                                        
  
  function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
  };                                                
  
  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
  
    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;
  
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
  
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
        }                      
    } else {
        if ( yDiff > 0  && count<4) {
          navUp();
        } else if (yDiff < 0 && count>0){ 
          navDown();
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
  };
  
  // EVENT SUR LE SWIPE HAUT,BAS D'UN SMARTPHONE ===================================
  
  // EVENT SUR LE SCROLL DE LA SOURIS===============================================
  
  function wheelHandler(){
  window.onwheel = function(evt)  {
       // Scrolling up
       if (evt.deltaY < 0 && count<4) {
      navUp();
       }
     
       // Scrolling down
       else if(evt.deltaY > 0 && count>0)  {
      navDown();
       }
    return count;
  }
  }
  // EVENT SUR LE SCROLL DE LA SOURIS===============================================
  
  // EVENT SUR LES TOUCHES DE DIRECTION DU CLAVIER =================================
  
  document.addEventListener('keydown',  function keyboard(event) {
    const nomTouche = event.key;
  
    if (nomTouche === 'ArrowUp' && count<4 ) {
      navUp();
    } else if (nomTouche === 'ArrowDown' && count>0){
      navDown();
    }
  }, false);
  
  
  // EVENT SUR LES TOUCHES DE DIRECTION DU CLAVIER =================================
  
  // FUNCTION POUR LE DÉFILEMENT DES PANNEAUX ======================================
  function navUp(){
    console.log('start');
    document.getElementById("page").removeEventListener("onwheel", wheelHandler);
    document.removeEventListener("touchstart", handleTouchStart, { capture: false });
    document.removeEventListener('touchmove', handleTouchMove, { capture: false });   
    ids[count].classList.remove("animIn");
    ids[count].classList.add("animOut");
    setTimeout(function()
      { 
        ids[count].classList.add("none");      
        // document.removeEventListener('touchmove', handleTouchMove, false);
        // document.removeEventListener('keydown');
        count++;
        ids[count].classList.remove("animOut");
        ids[count].classList.add("animIn");
        ids[count].classList.remove("none");
      }, 2000);
      setTimeout(function()
      { 
        // document.addEventListener('touchstart', handleTouchStart, false);
      }, 4000);
  }
  
  function navDown(){
  ids[count].classList.add("animOut");
  ids[count].classList.add("none");
  ids[count].classList.remove("animIn");
  count--;
  ids[count].classList.remove("animOut");
  ids[count].classList.add("animIn");
  ids[count].classList.remove("none");

  }
  // FUNCTION POUR LE DÉFILEMENT DES PANNEAUX ======================================