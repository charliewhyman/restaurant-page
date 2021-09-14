import pastaHeaderImage from './images/pasta-header.jpg';

const generateHomeTab = function generateHomeTab() {
    let divContent = document.getElementById('content');

    //create divs

    let bannerContainer = document.createElement('div');
    bannerContainer.className = 'container';
    bannerContainer.id = 'bannerContainer';
    bannerContainer.style.textAlign = 'center';
    bannerContainer.style.borderBottom = 'thick solid #5F6161';

    let copyContainer = document.createElement('div');
    copyContainer.className = 'container';
    copyContainer.id = 'copyContainer';
    copyContainer.style.display = 'flex';
    copyContainer.style.flexDirection = 'column';
    copyContainer.style.textAlign = 'center';
    copyContainer.style.backgroundColor = '#E1E0DE';
    copyContainer.style.margin = '1em 1em';

    
    // append html elements to content div
    // first append divs
    divContent.appendChild(bannerContainer);
    divContent.appendChild(copyContainer);

    //create child elements
    //create main image
    let bannerImage = document.createElement('img');
    bannerImage.src = pastaHeaderImage;
    bannerImage.alt = 'Picture of fresh pasta'
    bannerImage.style.width = '100%';
    bannerImage.style.objectFit = 'scale-down'
    bannerImage.style.filter = 'grayscale(100%)';

    //create text elements
    let restaurantHeadline = document.createElement('h1');
    restaurantHeadline.textContent = 'Fine Italian dining';
    restaurantHeadline.style.textEmphasis = 'x';

    let copyTitle = document.createElement('h1');
    copyTitle.textContent = 'The Restaurant';
    copyTitle.style.backgroundColor = '#C8C7C3';
    copyTitle.style.marginTop = '0px';

    let copyText = document.createElement('p');
    copyText.textContent = 'Mezza Dozzina (\'half-dozen\') is an Italian restaurant focusing on farm-fresh food with a modern twist.';

    let openingTimeTitle = document.createElement('h3');
    openingTimeTitle.textContent = 'Opening times:'

    let weekdayOpeningText = document.createElement('p');
    weekdayOpeningText.textContent = 'Monday to Friday: 6pm to 11pm';

    let saturdayOpeningText = document.createElement('p');
    saturdayOpeningText.textContent = 'Saturday: 5pm to 12pm';

    let sundayOpeningText = document.createElement('p');
    sundayOpeningText.textContent = 'Sunday: Closed';

    //append banner elements
    document.getElementById('bannerContainer').appendChild(restaurantHeadline);
    document.getElementById('bannerContainer').appendChild(bannerImage);

    //append container elements
    document.getElementById('copyContainer').appendChild(copyTitle);
    document.getElementById('copyContainer').appendChild(copyText);
    document.getElementById('copyContainer').appendChild(openingTimeTitle);
    document.getElementById('copyContainer').appendChild(weekdayOpeningText);
    document.getElementById('copyContainer').appendChild(saturdayOpeningText);
    document.getElementById('copyContainer').appendChild(sundayOpeningText);



};

export default generateHomeTab;