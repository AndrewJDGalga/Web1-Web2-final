const specialsBtns = document.getElementsByClassName('specials-popup');

for(let i = 0; i < specialsBtns.length; i++) {
    specialsBtns[i].onclick = () => { window.open('./pages/specials.html', '_blank', 'popup'); }
}

document.getElementById('mobile-menu').onclick = () => {
    const menu = document.querySelector('nav.mobile ul');
    menu.style.display = (menu.style.display === "none") ? "flex" : "none";
}