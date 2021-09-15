const generateContactTab = function generateContactTab() {
    let divContent = document.getElementById('content');

    //create divs
    let headerContainer = document.createElement('div');
    headerContainer.className = 'container';
    headerContainer.id = 'headerContainer';
    
    let contactDetailsContainer = document.createElement('div');
    contactDetailsContainer.className = 'container';
    contactDetailsContainer.id = 'contactDetailsContainer';

    let phoneContainer = document.createElement('div');
    phoneContainer.className = 'container';
    phoneContainer.id = 'phoneContainer';

    let emailContainer = document.createElement('div');
    emailContainer.className = 'container';
    emailContainer.id = 'emailContainer';

    divContent.appendChild(headerContainer);
    divContent.appendChild(contactDetailsContainer);
    contactDetailsContainer.appendChild(phoneContainer);
    contactDetailsContainer.appendChild(emailContainer);

    //create text elements
    let contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact details';

    let contactText = document.createElement('p');
    contactText.textContent = 'Reservations by phone or email.';

    let phoneSubtitle = document.createElement('h3');
    phoneSubtitle.textContent = 'Phone Us'

    let phoneNumber = document.createElement('a');
    phoneNumber.textContent = '01234 567890';
    phoneNumber.href = 'tel:01234 567890';
    phoneNumber.className = 'contactLink';

    let emailSubtitle = document.createElement('h3');
    emailSubtitle.textContent = 'Email Us'

    let email = document.createElement('a');
    email.textContent = 'hello@mezzadozzina.co.uk';
    email.href = 'mailto:hello@mezzadozzina.co.uk';
    email.className = 'contactLink';

    //append text elements
    headerContainer.appendChild(contactTitle);
    headerContainer.appendChild(contactText);

    phoneContainer.appendChild(phoneSubtitle);
    phoneContainer.appendChild(phoneNumber);

    emailContainer.appendChild(emailSubtitle);
    emailContainer.appendChild(email);

};

export default generateContactTab;