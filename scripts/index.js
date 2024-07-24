const specialsBtns = document.getElementsByClassName('specials-popup');

for(let i = 0; i < specialsBtns.length; i++) {
    const locationTest = window.location.href;
    const criteria = /pages/g;
    const result = locationTest.search(criteria);
    specialsBtns[i].onclick = () => { 
        const specialsLocation = (result === -1) ? './pages/specials.html' : '../pages/specials.html';
        window.open(specialsLocation, '_blank', 'popup');
    }
}

document.getElementById('mobile-menu').onclick = () => {
    const menu = document.querySelector('nav.mobile ul');
    menu.style.display = (menu.style.display === "none") ? "flex" : "none";
}