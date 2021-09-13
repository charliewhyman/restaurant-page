import './style.css';
import pastaHeaderImage from './images/pasta-header.jpg';
import logo from './images/logo.png';

let divContent = document.getElementById('content');

//create divs
let topNav = document.createElement('div');
topNav.className = 'container';
topNav.id = 'topNav';

let bannerContainer = document.createElement('div');
bannerContainer.className = 'container';
bannerContainer.id = 'bannerContainer';

let copyContainer = document.createElement('div');
copyContainer.className = 'container';
copyContainer.id = 'copyContainer';

//create child elements

//create logo and set source image/alt
let logoImage = document.createElement('img');
logoImage.src = logo;
logoImage.alt = 'Restaurant logo'

//create topNav links and set classes, hrefs
let homeLink = document.createElement('a');
homeLink.class = 'active';
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

//create main image
let bannerImage = document.createElement('img');
bannerImage.src = pastaHeaderImage;
bannerImage.alt = 'Picture of fresh pasta'

//create text elements
let restaurantTitle = document.createElement('h1');
restaurantTitle.textContent = 'Mezza Dozzina';

let restaurantHeadline = document.createElement('h2');
restaurantHeadline.textContent = 'Fine Italian dining';

let copyTitle = document.createElement('h3');
copyTitle.textContent = 'The Restaurant';

let copyText = document.createElement('p');
copyText.textContent = 'Mezza Dozzina (\'half-dozen\') is an Italian restaurant focusing on farm-fresh food with a modern twist.';

// append html elements to content div
// first append divs
divContent.appendChild(topNav);
divContent.appendChild(bannerContainer);
divContent.appendChild(copyContainer);

//then append other elements to 'sub-divs'
//append topNav elements
document.getElementById('topNav').appendChild(logoImage);
document.getElementById('topNav').appendChild(homeLink);
document.getElementById('topNav').appendChild(menuLink);
document.getElementById('topNav').appendChild(contactLink);

//append banner elements
document.getElementById('bannerContainer').appendChild(bannerImage);
document.getElementById('bannerContainer').appendChild(copyTitle);
document.getElementById('bannerContainer').appendChild(copyText);

//append container elements
