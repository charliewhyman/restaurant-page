const generateMenuTab = function generateMenuTab() {
    let divContent = document.getElementById('content');

    //create divs

    let headerContainer = document.createElement('div');
    headerContainer.className = 'container';
    headerContainer.id = 'headerContainer';

    let menuContainer = document.createElement('div');
    menuContainer.className = 'container';
    menuContainer.id = 'menuContainer';

    
    // append html elements to content div
    // first append divs
    divContent.appendChild(headerContainer);
    divContent.appendChild(menuContainer);
    divContent.appendChild(headerContainer);

    //create child elements

    //create text elements
    let menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our menu';

    //append text elements
    menuContainer.appendChild(menuTitle);

    //create array of menu item objects

    let menuItems = [
        {category:'pizza', item:'Margherita', price:'£13.99', description:'lorem ipsum et'},
        {category:'pizza', item:'Napolitana', price:'£14.99', description:'lorem ipsum et'},
        {category:'pasta', item:'Lasagne', price:'£14.99', description:'lorem ipsum et'}
     ];

     //define a function to generate the menu divs, which will hold the menu items in separate categories
     const generateMenuDivs = function generateMenuDivs() {
        //get a unique set of menu categories
        let uniqueCategories = [...new Set(menuItems.map(item => item.category))];

        //create and append a div for each menu category
        for (let index = 0; index < uniqueCategories.length; index++) {
            const category = uniqueCategories[index];
            
            //create flexbox element
            let newFlexbox = document.createElement('div');
            newFlexbox.className = 'container';
            newFlexbox.id = category +'Container';
            //set flexbox css
            newFlexbox.style.display = 'flex';
            newFlexbox.style.backgroundColor = 'red';
            newFlexbox.style.flexDirection = 'column'
            newFlexbox.style.justifyContent = 'space-around';

            //append flexbox element
            menuContainer.appendChild(newFlexbox);
        }
    };

generateMenuDivs();

    //populate table with menu items
    const populateTable = function populateTable() { 
        var flexbox = document.getElementById('menuContainer');

        for (let item of menuItems) {
            var newDiv = document.createElement('div');
            // set the id of the div as the object index
            newDiv.id = menuItems.indexOf(item).toString();

            //style the new div

            newDiv.style.display = 'flex';
            newDiv.style.flexDirection = 'column';
            newDiv.className = item.category;
            
            //append the new div
            let targetContainer = document.getElementById(item.category + 'Container');
            targetContainer.appendChild(newDiv);
            
            //add the text elements to the new div
            let categoryTitle = document.createElement('h2');
            categoryTitle.textContent = item.category;

            let menuItem = document.createElement('h3');
            menuItem.textContent = item.item;

            let descriptionItem = document.createElement('p');
            descriptionItem.textContent = item.description;
            
            //append the text elements

            //if the new menu entry is the first, also add the category title
            if (newDiv == targetContainer.firstElementChild) {
                targetContainer.appendChild(categoryTitle);
            };

            targetContainer.appendChild(menuItem);
            targetContainer.appendChild(descriptionItem);

        };
    };

    //populate flexbox divs
    populateTable();
    
};

export default generateMenuTab;