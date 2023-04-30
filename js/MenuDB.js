import burgerimg from '../assets/images/burger/burger.png';
import pizzaimg from '../assets/images/burger/pizza.png';
import sandwichimg from '../assets/images/burger/sandwich.png';
import ChickenBurger from '../assets/images/burger/Chicken.png';
import CheeseBurger from '../assets/images/burger/Cheese.png';
import BigMacBurger from '../assets/images/burger/BigMac.png';
import pepperPizza from '../assets/images/burger/pepper.png';
import chessePizza from '../assets/images/burger/chesse-pizza.jpg';
import onionPizza from '../assets/images/burger/onion.png';
import baconSandwich from '../assets/images/burger/bacon-sandwich.jpg';
import cheeseSandwich from '../assets/images/burger/cheese-sandwich.jpg';
import veganSandwich from '../assets/images/burger/vegan-sandwich.jpg';

export const menu = [{
    img: burgerimg,
    type: 'Burger',
    menuList: [{
        name: 'Chicken',
        id: 0,
        price: 15,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Burger',
        rating: 4.5,
        img: ChickenBurger,
    }, {
        name: 'Cheese',
        id: 1,
        price: 10,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Burger',
        rating: 4.2,
        img: CheeseBurger,
    }, {
        name: 'BiMac',
        id: 2,
        price: 20,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Burger',
        rating: 3.8,
        img: BigMacBurger,
    }]
}, {
    img: pizzaimg,
    type: 'Pizza',
    menuList: [{
        name: 'Pepper',
        id: 0,
        price: 13,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Pizza',
        rating: 3.5,
        img: pepperPizza,
    }, {
        name: 'Onion',
        id: 1,
        price: 12,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Pizza',
        rating: 4.2,
        img: onionPizza,
    }, {
        name: 'Chesse',
        id: 2,
        price: 15,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Pizza',
        rating: 4,
        img: chessePizza,
    }]
}, {
    img: sandwichimg,
    type: 'Sandwich',
    menuList: [{
        name: 'Bacon',
        id: 0,
        price: 10,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Sandwich',
        rating: 3.2,
        img: baconSandwich,
    }, {
        name: 'Cheese',
        id: 1,
        price: 8,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Sandwich',
        rating: 4.1,
        img: cheeseSandwich,
    }, {
        name: 'Vegan',
        id: 2,
        price: 5,
        description: '100 gr chicken + tomato + cheese  Lettuce',
        type: 'Sandwich',
        rating: 4.9,
        img: veganSandwich,
    }]
}]