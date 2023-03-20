var header = document.getElementById('header')
var element = document.getElementById('showSidebar')
var main = document.getElementById('main')
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    console.log(showSidebar)
    if(showSidebar){
        element.style.marginLeft = '-1vw';
        element.style.animationName = 'showSidebar';
        main.style.filter = 'blur(1px)';
    }
    else {
        element.style.marginLeft = '-100vw';
        element.style.animationName = '';
        main.style.filter = '';
    }
}

function closeSidebar(){

    if(showSidebar){
        toggleSidebar();
    }

}

window.addEventListener('resize', function(event)) {
    if(window.innerWidth > 574 && showSidebar){
        toggleSidebar();
    }
}