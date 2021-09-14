const generateContactTab = function generateContactTab() {
    let divContent = document.getElementById('content');

    //create divs
    let headerContainer = document.createElement('div');
    headerContainer.className = 'container';
    headerContainer.id = 'headerContainer';
    
    let contactDetailsContainer = document.createElement('div');
    contactDetailsContainer.className = 'container';
    contactDetailsContainer.id = 'contactDetailsContainer';

    divContent.appendChild(headerContainer);
    divContent.appendChild(contactDetailsContainer);
    
    //add text elements
    let contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact details';

    headerContainer.appendChild(contactTitle);
};

export default generateContactTab;