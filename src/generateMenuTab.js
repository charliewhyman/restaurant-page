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
        {category:'Starters', item:'Nocellara', price:'4.70', description:'Fresh Queen Nocellara olives from Sicily, with a buttery flavour'},
        {category:'Starters', item:'Bruchetta', price:'4.90', description:'Grilled sourdough bread, rubbed with garlic and topped with fresh Pisanello tomatoes from Tuscany'},
        {category:'Starters', item:'Pane', price:'3.20', description:'Sourdough bread with extra virgin olive oil and balsamic vinegar'},
        {category:'Starters', item:'Burrata', price:'6.30', description:'Full-bodied Apulian buffalo cheese'},
        {category:'Starters', item:'Friarielli', price:'5.50', description:'A variety of broccoli from Napoli, lightly seared and served with homemade bread'},

        {category:'Pizza', item:'Margherita', price:'13.50', description:'San Marzano tomatoes and sliced mozzarella di bufala Campana'},
        {category:'Pizza', item:'Quattro', price:'16.70', description:'San Marzano tomatoes, mozzarella, stracchino, fontina, gorgonzola'},
        {category:'Pizza', item:'Bianca', price:'11.20', description:'Extra virgin olive oil, sea salt flakes and rosemary sprigs'},
        {category:'Pizza', item:'Viennese', price:'13.30', description:'San Marzano tomatoes, mozzarella, n\'duja and oregano'},
        {category:'Pizza', item:'Napolitana', price:'13.90', description:'San Marzano tomatoes, mozzarella di bufala Campana and Agostino Recca anchovies'},

        {category:'Pasta', item:'Cacio', price:'12.10', description:'Tonnarelli (square-cut spaghetti) with salty pecorino romano and black pepper'},
        {category:'Pasta', item:'Ravioli', price:'14.70', description:'Homemade butternut ravioli with brown butter and sage'},
        {category:'Pasta', item:'Tagliatelle', price:'15.30', description:'Fresh basil pesto & pine nuts with tagliatelle'},
        {category:'Pasta', item:'Fettucine', price:'16.20', description:'Fettucine with an earthy black truffle alfredo sauce'},

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
            descriptionItem.textContent = item.description + '. '+ '\u00A0' + item.price;
            
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