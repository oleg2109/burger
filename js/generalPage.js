import {header} from './generalHead';
import {banner} from './generalBanner';
import {generalMenu} from './generalMenu';
import {create} from './helper';
import background from '../assets/images/burger/top-background.png';

//import background2 from '../assets/images/burger/BACKGROUND 2.png';

export const wrapper = create('div', 'WRAPPER', document.body);


export const general = () => {
const imgTop = create('img', 'IMGTOP', wrapper);
imgTop.setAttribute('src', background); 



header();
banner();
generalMenu ();
}

