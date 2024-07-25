const adBody = document.getElementById('ad');
const adImg = document.getElementsByClassName('ad-background');
const imageLocations = [
    '../img/ad_images/alexander-grey-ZYyBlwUFPFk-unsplash-small.jpg',
    '../img/ad_images/analia-baggiano-CdnyQH3_Lb4-unsplash-small.jpg',
    '../img/ad_images/dana-devolk-5-RS_ScO3X4-unsplash-small.jpg',
    '../img/ad_images/dylan-ferreira-gHXi8mBHPyM-unsplash-small.jpg',
    '../img/ad_images/josephina-kolpachnikof-piA65cp-1EI-unsplash-small.jpg',
    '../img/ad_images/patrick-fore-AfhSPYdkxiU-unsplash-small.jpg',
    '../img/ad_images/rachael-gorjestani-HLt6jQLf_J0-unsplash-small.jpg',
    '../img/ad_images/robert-anasch-ugV_7jiFRxM-unsplash-small.jpg',
    '../img/ad_images/yes-and-studio-XVYz_QeiEBw-unsplash-small.jpg'
];

const randomImageString = () => {
    return imageLocations[Math.floor(Math.random() * imageLocations.length)];
}

window.onload = () => {
    for(let i = 0; i < adImg.length; i++) {
        adImg[i].style.backgroundImage = `url(${randomImageString()})`;
    }

    setInterval(()=>{
        adImg[Math.floor(Math.random() * adImg.length)].style.backgroundImage = `url(${randomImageString()})`;
    }, 3000);
}
