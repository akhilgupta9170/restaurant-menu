let restaurantArrays = [
    { name: "Taco Town", foodType: "Mexican", customerRating: 4.5, id: 1 },
    { name: "Sushi Palace", foodType: "Japanese", customerRating: 4.2, id: 2 },
    { name: "Pizza Hut", foodType: "Italian", customerRating: 4.8, id: 3 },
    { name: "Chicken Ranch", foodType: "American", customerRating: 4.7, id: 4 },
    { name: "Burger King", foodType: "American", customerRating: 4.6, id: 5 },
    { name: "Cafe Rio", foodType: "Spanish", customerRating: 4.9, id: 6 }
];


let menuArraysOfRestaurants = [{
    restaurantId: 1,
    menuItems: ["Chicken Wings", "Grilled Salmon", "Fried Chicken", "Tacos", "Burger", "Pizza"]
},
{
    restaurantId: 2,
    menuItems: ["Sushi Roll", "Nigiri", "Tempura", "Sashimi", "Egg Roll", "Takoyaki"]
},
{
    restaurantId: 3,
    menuItems: ["Pizza Margherita", "Pizza Pepperoni", "Pizza Capricciosa", "Pizza Carbonara", "Pizza Mushroom", "Pizza Mozzarella"]
},
{
    restaurantId: 4,
    menuItems: ["Steak and Cheese", "Ribeye Steak", "Chicken Alfredo", "Beef Stroganoff", "Fried Chicken", "Baked Salmon"]
},
{
    restaurantId: 5,
    menuItems: ["Cheeseburger", "Bacon Burger", "Double Cheeseburger", "Mushroom Burger", "Hamburger", "Poutine"]
},
{
    restaurantId: 6,
    menuItems: ["Ramen", "Tempeh", "Pad Thai", "Bowl of Vegetables", "Pad See Ew", "Pad Kway Teow"]
}


]

let userInput = document.getElementById('userInput');
let restaurantList = document.getElementById('restaurantList');


userInput.addEventListener('keyup', (event) => {
    restaurantList.innerHTML = '';

    let inputValue = event.target.value;
    if (inputValue.length < 3) {
        return;

    }

    let filteredRestaurants = restaurantArrays.filter(restaurant => restaurant.name.toLowerCase().includes(inputValue.toLowerCase()));

    filteredRestaurants.forEach(restaurant => {
        let li = document.createElement('li');
        li.textContent = restaurant.name;
        restaurantList.appendChild(li);
        li.addEventListener('click', () => {
            window.location.href = `menu.html?id=${restaurant.id}`;
        });



    });
})


function menuOfRestaurants(restaurantId) {
    // restaurantList.innerHTML = "";
    // let h2 = document.createElement('h2');
    // h2.textContent = `Menu for ${restaurantArrays.find(restaurant => restaurant.id === restaurantId).name}`;
    // restaurantList.appendChild(h2);
    
    // let menuItems = menuArraysOfRestaurants.find(restaurant => restaurant.restaurantId === restaurantId).menuItems;
    // menuItems.forEach(item => {
    //     let menuItem = document.createElement('li');
       
    //     menuItem.textContent = item;
    //     restaurantList.appendChild(menuItem);
      
     


    };














