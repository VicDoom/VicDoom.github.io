document.addEventListener('DOMContentLoaded', function(){

    let slides;

    const sliders = document.querySelectorAll('.slider');
    for (let i = 0; i < sliders.length; i++) {
        createSliders(sliders[i]);
    }

    function createSliders(slider) {
        slides = document.querySelectorAll('.slide');
        if (!slides.length) return;

        let wrapper = document.querySelector('.slider-wrapper');
        // let sliderHidden = document.querySelector('.slider-hidden');

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
                    if (activeSlide < 1) {
                        activeSlide = 0;
                        //я не смог допилить нормально циклический слайдер
                        //поэтому сделал костыль(

                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                        activeSlide = slides.length - 2;
                        slides[activeSlide].classList.add('active');
                        // let beforeWrapper = wrapper.cloneNode(true); 
                        // sliderHidden.prepend(beforeWrapper);
                        // beforeWrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                        // wrapper.remove();
                        // wrapper = beforeWrapper.cloneNode(true);
                        // slides[activeSlide].classList.add('active');
                        counter.innerHTML = activeSlide + 1;
                    } else {
                        counter.innerHTML = activeSlide + 1;
                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                    }
                    // wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
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
});