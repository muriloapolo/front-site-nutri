let btnNav = document.querySelector('.btn-nav-res');
let leftMenu = document.querySelector(".left-menu");
let rightMenu = document.querySelector(".right-menu");
btnNav.addEventListener('click', openNavBar);

function openNavBar (){

  leftMenu.classList.toggle('responseLeft');
  rightMenu.classList.toggle('responseRight');
}

window.onresize = function(){
    if(leftMenu.classList.contains('responseLeft')){
        leftMenu.classList.remove('responseLeft')
        if(rightMenu.classList.contains('responseRight')){
            rightMenu.classList.remove('responseRight')    
        }
    }
}