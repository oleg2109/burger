import {
    wrapper
} from './generalPage';
import {
    create
} from './helper';
import banner1 from '../assets/images/burger/banner1.png';
import banner2 from '../assets/images/burger/banner2.jpeg';
import banner3 from '../assets/images/burger/banner3.jpg';
const banners = [banner1, banner2, banner3]


export const banner = () => {
    const banner = create('section', 'BANNER', wrapper);
    const imgGallery = create('div', 'IMGGALLERY', banner);
    const dotes = create('div', 'DOTES', banner);
    let i = 0;
    banners.forEach((item) => {
        const img = create('img', 'IMG1', imgGallery);
        img.setAttribute('src', item);
        img.setAttribute('data-id', i);
        const dot = create('div', 'DOT', dotes);
        dot.setAttribute('data-id', i);
        if (i == 0) {
            img.classList.add('ACTIVE');
            dot.classList.add('DOTRED');
        }
        i++;
    })


    banner.addEventListener('click', (e) => {
        if (e.target.classList.contains('DOT')) {
            banner.querySelectorAll('.DOT').forEach((item) => {
                item.classList.remove('DOTRED');
                e.target.classList.add('DOTRED');
            })
            banner.querySelectorAll('.IMG1').forEach((item) => {
                item.classList.remove('ACTIVE');
                if (e.target.dataset.id == item.dataset.id) {
                    item.classList.add('ACTIVE');
                }
            })
        }
    })
}