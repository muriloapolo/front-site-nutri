//  NAVBAR RESPONSIVA
const btnNav = document.querySelector('.btn-nav-res');
const btnNavClose = document.querySelector('.btn-nav-res-close')
const leftMenu = document.querySelector(".left-menu");
const rightMenu = document.querySelector(".right-menu");
btnNav.addEventListener('click', openNavBar);
function openNavBar (){

  leftMenu.classList.toggle('responseLeft');
  rightMenu.classList.toggle('responseRight');
    btnNav.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    if(!leftMenu.classList.contains('responseLeft')){
        btnNav.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}
window.onresize = function(){
    if(leftMenu.classList.contains('responseLeft')){
        leftMenu.classList.remove('responseLeft'); 
        btnNav.innerHTML = '<i class="fa-solid fa-bars"></i>';       
        if(rightMenu.classList.contains('responseRight')){
            rightMenu.classList.remove('responseRight');    
        }else{
            btnNav.innerHTML = '<i class="fa-solid fa-bars"></i>';  
        }
    }
}
//  FIM NAVBAR RESPONSIVA