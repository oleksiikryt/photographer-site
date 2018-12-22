$("#boots-carous").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll:"vertical"
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('orientationchange', toggleOrientation);

function toggleOrientation() {
  setTimeout(onOrientationChange,100);
  setTimeout(onOrientationChange,300);
  setTimeout(onOrientationChange,1000);
}

function onOrientationChange(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

var listMenuItems = document.getElementsByClassName('subject-link');
listMenuItems[0].addEventListener('click', hideMenu);
listMenuItems[2].addEventListener('click', hideMenu);
listMenuItems[4].addEventListener('click', hideMenu);
listMenuItems[6].addEventListener('click', hideMenu);

document.getElementsByClassName('custom-toggler')[0].addEventListener('click', function () {
  let  collapseMenu = document.getElementsByClassName('custom-collapse-menu')[0];
       collapseMenu.classList.remove('custom-collapse-menu--hidden');
       collapseMenu.classList.add('custom-collapse-menu--visible');
       let menuItem = document.getElementsByClassName('subject-link');
       menuItem[0].classList.add('animation-fade-up');
       menuItem[2].classList.add('animation-fade-up');
       menuItem[4].classList.add('animation-fade-up');
       menuItem[6].classList.add('animation-fade-up');
});

document.getElementsByClassName('custom-close-button')[0].addEventListener('click', hideMenu);


function hideMenu() {
  let menuItem = document.getElementsByClassName('subject-link');
  menuItem[0].classList.remove('animation-fade-up');
  menuItem[2].classList.remove('animation-fade-up');
  menuItem[4].classList.remove('animation-fade-up');
  menuItem[6].classList.remove('animation-fade-up');
  let  collapseMenu = document.getElementsByClassName('custom-collapse-menu')[0];
       collapseMenu.classList.add('custom-collapse-menu--hidden');
       collapseMenu.classList.remove('custom-collapse-menu--visible');
}
