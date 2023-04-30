import {
    wrapper
} from './generalPage';
import {
    create
} from './helper';
import {
    menu
} from './MenuDB';
import star from '../assets/images/burger/ratingimg.png';

export function generalMenu() {
    const mainMenu = create('section', 'MAIN_MENU', wrapper);
    const menuListWrapper = create('div', 'MENU_LIST_WRAPPER', mainMenu);
    const menuItemList = create('div', 'MENU_ITEM_LIST', mainMenu)

    createMenu();
    createItem();
    toggleTubs();


    function createMenu() {
    menu.forEach((item) => {
        const menuList = create('div', 'MENULIST', menuListWrapper);
        const imgMenuWrapper = create('div', 'IMG_MENU_WRAPPER', menuList);
        const imgMenu = create('img', 'IMG_MENU', imgMenuWrapper);
        imgMenu.setAttribute('src', item.img);
        const Caption = create('h2', 'CAPTION', menuList, item.type);
        if (item.type == 'Burger') {
            menuList.classList.add('ACTIVE_MENU');
        }
        
        
    })
}


    function createItem() {
        menuItemList.innerHTML = '';
        const itemList = mainMenu.querySelectorAll('.MENULIST');
        itemList.forEach((itemDiv) => {
           menu.forEach((item) =>{

           
            item.menuList.forEach((one) => {
                if (itemDiv.querySelector('.CAPTION').textContent == one.type && itemDiv.classList.contains('ACTIVE_MENU')) {

                    const MenuItem = create('div', 'MENU_ITEM', menuItemList);
                    const rating = create('div', 'RATING', MenuItem, `<img src='${star}'></img>${one.rating}`);
                    const MenuItemImgWrap = create('div', 'MENU_ITEM_IMG_WRAP', MenuItem)
                    const MenuItemImg = create('img', 'MENU_ITEM_IMG', MenuItemImgWrap);
                    MenuItemImg.setAttribute('src', one.img);
                    const MenuItemCaption = create('h3', 'MENU_ITEM_CAPTION', MenuItem, `${one.name} ${one.type}`);
                    const MenuItemDescription = create('div', 'MENU_ITEM_DESCRIPTION', MenuItem, `${one.description}`);
                    const MenuItemFooter = create('div', 'MENU_ITEM_FOOTER', MenuItem);
                    const MenuItemPrice = create('div', 'MENU_ITEM_PRICE', MenuItemFooter, `$${one.price}.<span class='PENNIES'>00</span>`);
                    const MenuItemBtn = create('div', 'MENU_ITEM_BTN', MenuItemFooter);
                    const MenuItemBtnLine1 = create('div', 'MENU_ITEM_BTN_LINE1', MenuItemBtn);
                    const MenuItemBtnLine2 = create('div', 'MENU_ITEM_BTN_LINE2', MenuItemBtn);
                    console.log(itemDiv.querySelector('.CAPTION').textContent);
                };
            })
        })
    })
    }

   

    function toggleTubs() {
        const itemList = mainMenu.querySelectorAll('.MENULIST');

        mainMenu.addEventListener('click', (e) => {
            const target = e.target.closest('.MENULIST');
            if (target) {
                itemList.forEach((item) => {
                    item.classList.remove('ACTIVE_MENU');
                    target.classList.add('ACTIVE_MENU');

                })
            }
            createItem();
        })
        



    }
    
   




}