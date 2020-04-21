 /*Responsive nav menu*/

 const navMenu = () => {
     const navbarToggler = document.querySelector('.navbar-toggler')
     const navList = document.querySelector('.nav-list')

     navbarToggler.addEventListener('click', () => {
         navList.classList.toggle('nav-active')
         navbarToggler.classList.toggle('toggle')
     })
 };
 navMenu();

 /* Services Slider */

 const servicesChange = () => {
     let firstChild, lastChild;
     const arrowLeft = document.querySelector('#arrow-left');
     const arrowRight = document.querySelector('#arrow-right');
     const servicesAll = document.querySelector('#services-slider');

     document.addEventListener('click', () => {
         if (event.target === arrowLeft) {
             lastChild = servicesAll.lastElementChild;
             servicesAll.insertAdjacentElement('afterbegin', lastChild)
         }else if (event.target === arrowRight) {
            firstChild = servicesAll.firstElementChild;
            servicesAll.insertAdjacentElement('beforeend', firstChild)
        }
     })
 };
 servicesChange();

 /* Scrol Reveal Animations*/
 ScrollReveal().reveal('.ani-left', {
     origin: 'left', //animasyon ne tarafdan başlayacağını belitiyoruz.
     distance: '10rem', //animasyonun ne kadar hareket edeceğini yazıyor
     duration: 1000, //kaç saniye 
     easing: 'ease-in' //animasyon şekli
 });
 ScrollReveal().reveal('.ani-right', {
     origin: 'right',
     distance: '10rem',
     duration: 1000,
     easing: 'ease-in'
 });
 ScrollReveal().reveal('.ani-fade-up', {
     opacity: 0,
     easing: 'ease-in'
 });
 ScrollReveal().reveal('.ani-bottom', {
     origin: 'bottom',
     distance: '10rem',
     duration: 1000,
     easing: 'ease-in'
 });
 ScrollReveal().reveal('.ani-delay', {
     delay: 500
 });
 ScrollReveal().reveal('.ani-delay-2', {
     delay: 1000
 });