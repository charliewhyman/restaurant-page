import pastaHeaderImage from './images/pasta-header.jpg';

const generateHomeTab = function generateHomeTab() {
    let divContent = document.getElementById('content');

    //create divs

    let bannerContainer = document.createElement('div');
    bannerContainer.className = 'container';
    bannerContainer.id = 'bannerContainer';

    let copyContainer = document.createElement('div');
    copyContainer.className = 'container';
    copyContainer.id = 'copyContainer';

    // append html elements to content div
    // first append divs
    divContent.appendChild(bannerContainer);
    divContent.appendChild(copyContainer);

    //create child elements
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

    //append banner elements
    document.getElementById('bannerContainer').appendChild(bannerImage);
    document.getElementById('bannerContainer').appendChild(restaurantTitle);
    document.getElementById('bannerContainer').appendChild(restaurantHeadline);

    //append container elements
    document.getElementById('copyContainer').appendChild(copyTitle);
    document.getElementById('copyContainer').appendChild(copyText);

};

export default generateHomeTab;