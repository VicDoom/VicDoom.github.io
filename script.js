'use strict';

let button = document.querySelector('.but');
let body = document.querySelector('body');
let section = document.querySelectorAll('section');
let header = document.querySelector('header');
let main = document.querySelectorAll('main');
let footer = document.querySelector('footer');
let marquee = document.querySelectorAll('marquee');
let divs = document.querySelectorAll('div');
let title = document.querySelector('title');

let active = false;

button.addEventListener("click", function() {

    if (!active) {
        for (let i = 0; i < section.length; i++) {
            section[i].classList.add('active');
        }

        for (let i = 0; i < main.length; i++) {
            main[i].classList.add('active');
        }

        for (let i = 0; i < marquee.length; i++) {
            marquee[i].classList.add('active');
        }

        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.add('active');
            console.log('addaddadd');
        }

        header.classList.add('active');
        footer.classList.add('active');
        body.classList.add('active');
        
        active = true;
        console.log('show');
        button.src = 'close.png';
    } else {

        for (let i = 0; i < section.length; i++) {
            section[i].classList.remove('active');
        }

        for (let i = 0; i < main.length; i++) {
            main[i].classList.remove('active');
        }

        for (let i = 0; i < marquee.length; i++) {
            marquee[i].classList.remove('active');
        }

        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.remove('active');
            console.log('removeremoveremove');
        }
        header.classList.remove('active');
        footer.classList.remove('active');
        body.classList.remove('active');
        active = false;
        console.log('hide');
        button.src = 'hum.png';
    }

});

// фиксирование header при скролле

document.addEventListener('DOMContentLoaded', function () {
    // const header = document.querySelector('header');
  
    if (!header) return;
  
    let hidden = false;
    let scrolled = 0;
    let scrolledInterval = 0;
    let scrolledNow = 0;

    function handleScroll() {
        
        scrolledNow = window.scrollY;
        header.style.backgroundColor = 'transparent';
        if (scrolledNow > 10) {
            if (scrolledNow - scrolled > 0) {
                scrolledInterval = 0;
                hidden = true;
                header.classList.add('hidden');
            } else {
                scrolledInterval += scrolled - scrolledNow;
                // console.log(34343434);
                if (scrolledInterval > 50 && hidden) {
                    hidden = false;
                    header.classList.remove('hidden');
                }
            }
        } else {
            // if (title.innerHTML == 'RDCLRHOME')
            //     header.style.backgroundColor = '#EC3332';
            // else 
            //     header.style.backgroundColor = 'transparent';
            hidden = false;
            header.classList.remove('hidden');
        }
       

        scrolled = scrolledNow;
        
    }
    // handleScroll();
  
    window.addEventListener('scroll', handleScroll);
});

// let cursor = document.createElement('div');


//---------------------------------------//
// СЛАЙДЕР

document.addEventListener('DOMContentLoaded', function(){

    let slides;

    const sliders = document.querySelectorAll('.slider');
    for (let i = 0; i < sliders.length; i++) {
        createSliders(sliders[i]);
    }

    function createSliders(slider) {
        slides = document.querySelectorAll('.slide');
        if (!slides.length) return;

        const wrapper = document.querySelector('.slider-wrapper');

        const prevButton = document.querySelector('.slider-prev');
        const nextButton = document.querySelector('.slider-next');
        
        let counter = document.querySelector('.counter span');
        
        let width = 0;
        function resize() {
            width = slider.scrollWidth;
        }
        resize();
        window.addEventListener('resize', resize);

        let activeSlide = 0;
        slides[activeSlide].classList.add('active');
        counter.innerHTML = '1';

        console.log(slides);
        if (prevButton)
        prevButton.addEventListener('click', function() {

                    slides[activeSlide].classList.remove('active');
                    activeSlide--;
                    if (activeSlide < 0) { 
                        activeSlide = slides.length - 1; 
                        counter.innerHTML = slides.length;
                    } else {
                        counter.innerHTML--;
                    }
                    wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                    console.log(wrapper.style.tranform);
                    slides[activeSlide].classList.add('active');
                });
        
       if (nextButton)
        nextButton.addEventListener('click', function() {
        
                    slides[activeSlide].classList.remove('active');
                    activeSlide++;
                    if (activeSlide > slides.length - 1) {

                        counter.innerHTML = 1;
                        activeSlide = 0;
                        // let img = wrapper.createElement('img');
                        // wrapper.appendChild(img);
                        // console.log(wrapper[length - 1]);

                        // console.log(slides[activeSlide]);
                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                        // wrapper.style.transform = 'translate(-0px, 0px)';
                        // delete slides[activeSlide];
                        
                        slides[activeSlide].classList.add('active');
                    } else {
                        counter.innerHTML++;
                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                        slides[activeSlide].classList.add('active');
                    }
                    
                    
                });
        
    }

    //-------------------------------//

    let ulabel = document.querySelectorAll('.ulabel');
    let rotated = false;

    console.log(ulabel);
    for (let i = 0; i < ulabel.length; i++) 
        ulabel[i].addEventListener('click', function() {
            console.log('completed');
            if (!rotated) {
                ulabel[i].classList.add('active');
                rotated = true;
            } else {
                ulabel[i].classList.remove('active');
                rotated = false;
            }
            
        });
});

//--------------------------//

document.addEventListener('DOMContentLoaded', function() {

    let windowHeight, windowWidth, xCenter, yCenter, cX, cY;

    let p1 = document.getElementsByClassName('underRDCLR')[0];
    let p2 = document.getElementsByClassName('underHOME')[0];

    function calc() {

        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        yCenter = windowHeight/2;
        xCenter = windowWidth/2;

        console.log(windowWidth > 768);
    }

    let posX = 0 , posY = 0, nposX = 0, nposY = 0;

    calc();

    function animate() {
        posX += (nposX - posX) / 5;
        posY += (nposY - posY) / 5;

        let x = (posX - xCenter) / windowWidth * 40;
        let y = (posY - yCenter) / windowHeight * 40;
            
        p1.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        p2.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
     
        // console.log(x, y);
        requestAnimationFrame(animate);
    }

    //animate();

    document.addEventListener('mousemove', function() {
        nposX = event.clientX;
        nposY = event.clientY;
         animate(); //changed that
    });

    window.addEventListener('resize', calc());
    
    // -------------------------------//

    let arrowUp = document.querySelector('.up');

    if (title.innerHTML == 'О нас' && window.innerWidth > 767) {
        console.log(88005553535);
        arrowUp.style.display = 'none';
    }
    arrowUp.addEventListener('click', function() {
        console.log(window.scrollY);
        window.scrollTo(0, 0);
    });

    let arrowDown = document.querySelector('.arrowDown');
    let sections = document.querySelectorAll('section');
    
    arrowDown.addEventListener('click', function() {

        let height = 0;
        for (let i = 0; i < 5; i++) {
            height += sections[i].offsetHeight;
        }
        
        if (window.innerWidth < 768) {
            height += header.offsetHeight;
        }
        console.log(height);
        window.scrollTo(0, height);
    });
    
    let request = document.querySelector('.request')
    request.addEventListener('click', function() {
        let height = 0;
        for (let i = 0; i < 7; i++) {
            height += sections[i].offsetHeight;
        }
        if (window.innerWidth < 768) {
            height += header.offsetHeight;
        }

        window.scrollTo(0, height);
    })

    // валидация формы
});

document.addEventListener('DOMContentLoaded', function() {

    const overlay = document.querySelector('.overlay');
    const forms = document.querySelectorAll('form');
    const messageText = document.querySelector('.message-text');
    const conditionForm = document.querySelector('.popup')

    if (!messageText) return;

    overlay.addEventListener('click', function() {
        document.documentElement.classList.remove('popupActive');
        conditionForm.querySelector('.popup-inner.active').classList.remove('active');
    });

    let close = conditionForm.querySelectorAll('.close');
    for (let i = 0; i < close.length; i++)
        close[i].addEventListener('click', function() {
            document.documentElement.classList.remove('popupActive');
            conditionForm.querySelector('.popup-inner.active').classList.remove('active');
        });

    Array.from(forms).forEach(form => createForm(form, messageText));

    function createForm(form, mess) {
        const action = form.action;
        const elements = form.elements;

        if (!action || !elements.length) return;

        function validate() {
            let result = true;

            for (let i = 0; i < elements.length; i++) {
                let el = elements[i];

                if (el.dataset.required) continue;
                if (el.type === 'email' || el.type === 'text') {
                    if (!el.value) {
                        el.classList.add('error');
                        el.addEventListener('input', () => {
                            el.classList.remove('error');
                        });
                        result = false;
                        console.log(result);
                    }
                } else if (el.type === 'checkbox') {
                    if (!el.checked) {
                        el.classList.add('error');
                        el.addEventListener('change', () => {
                            el.classList.remove('error');
                        });
                        result = false;
                        console.log(result);
                    }
                } else if (el.tagName.toLocaleLowerCase() === 'select') {
                    if (el.selectedIndex === 0) {
                        el.classList.add('error');
                        el.addEventListener('change', () => {
                            el.classList.remove('error');
                    });
                        result = false;
                        console.log(result);
                }
            }
        }
            return result;
    }

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            document.documentElement.classList.add('popupActive');
            if (!validate()) {
                conditionForm.querySelector('.popup-inner.fail').classList.add('active');
                return;
            }

            console.log(conditionForm);
            conditionForm.querySelector('.popup-inner.success').classList.add('active');
        });
    }

    

});




