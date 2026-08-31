// En dropdown meny
function menuBtn() {
    document.getElementById('menu').classList.toggle('show');
}

// Stänger menyn om användaren klickar utanför menyn eller hamburgarikonen
window.onclick = function(event) {
    var menu = document.getElementById('menu');
    var menuIcon = document.querySelector('.menu-icon');
    
    // Om man klickar på något annat än hamburgarikonen eller menyn
    if (!menu.contains(event.target) && event.target !== menuIcon) {
        menu.classList.remove('show');
    }
};