import {create} from './helper';
import {wrapper} from './generalPage';
import target from '../assets/images/burger/target.png';
import icon from '../assets/images/burger/icon.png';
import searchicon from '../assets/images/burger/search.png';

export const header = () => {
    const header = create('section', 'HEADER', wrapper); 
   
    const topMenu = create('div', 'TOPMENU', header);
    const burgerMenu = create('div', 'BURGERMENU', topMenu);
    const line1 = create('div', 'LINE1', burgerMenu);
    const line2 = create('div', 'LINE2', burgerMenu);
    const line3 = create('div', 'LINE3', burgerMenu);
    const place = create('div', 'PLACE', topMenu);
    const imgwrapper = create('div', 'IMGWRAPPER', place);
    const imgTarget = create('img', 'IMGTARGET', imgwrapper);
    imgTarget.setAttribute('src', target);
    const placeText = create('span', 'PLACETEXT', imgwrapper, 'Freedom way, Lekki phase');
    const profile = create('div',  'PROFILE', topMenu);
    const profileicon = create('img', 'PROFILEICON', profile);
    profileicon.setAttribute('src', icon);
    const searchWrapper = create('div', 'SEARCHWRAPPER', header)
    const search = create('input', 'SEARCH', searchWrapper);
    search.placeholder = 'Search';
    search.setAttribute('type', 'text');
    const searchIcon = create('img', 'SEARCHICON', searchWrapper);
    searchIcon.setAttribute('src', searchicon);
}

