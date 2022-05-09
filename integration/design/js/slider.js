export function app(){
    
    console.log('%c' + "slider.js détecté", 'color: red; font-size: 1.5rem');

    //~ Import de Swiper JS
    import Swiper, { Navigation, Pagination } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    }); 
};
