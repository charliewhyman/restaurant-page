import './style.css';
import logo from './images/logo.png';

import generateHomeTab from './generateHomeTab';
import generateMenuTab from './generateMenuTab';
import generateContactTab from './generateContactTab';

let divContent = document.getElementById('content');

//create divs
let topNav = document.createElement('div');
topNav.className = 'container';
topNav.id = 'topNav';

//create child elements

//create logo and set source image/alt
let logoImage = document.createElement('img');
logoImage.src = logo;
logoImage.alt = 'Restaurant logo'

//create topNav links and set classes, hrefs
let homeLink = document.createElement('a');
homeLink.id = 'homeLink';
homeLink.href = '#home';
homeLink.textContent = 'Home';

let menuLink = document.createElement('a');
menuLink.id = 'menuLink';
menuLink.href = '#menu';
menuLink.textContent = 'Menu';

let contactLink = document.createElement('a');
contactLink.id = 'contactLink';
contactLink.href = '#contact';
contactLink.textContent = 'Contact';

//define a function to reset page to above state
const resetPage = function resetPage() {
    //delete all elements
    while (divContent.lastElementChild) {
        divContent.removeChild(divContent.lastElementChild);
      };
    
    // append html elements to content div
    // first append divs
    divContent.appendChild(topNav);

    //then append other elements to 'sub-divs'
    //append topNav elements
    document.getElementById('topNav').appendChild(logoImage);
    document.getElementById('topNav').appendChild(homeLink);
    document.getElementById('topNav').appendChild(menuLink);
    document.getElementById('topNav').appendChild(contactLink);
};

//generate the initial page
resetPage();

//add event listeners to all topNav links
topNav.addEventListener('click', (event) => {
    const isLink = event.target.tagName.toLowerCase() === 'a';
    if (isLink && event.target.id === 'homeLink') {
        resetPage();
        generateHomeTab();
    } else if (isLink && event.target.id === 'menuLink') {
        resetPage();
        generateMenuTab();
    } else if (isLink && event.target.id === 'contactLink') {
        resetPage();
        generateContactTab();
    };
});