const slider =document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#sliderNext');
const btnPrev = document.querySelector('#sliderPrev');
sliderItems.forEach(function(slide,index){
    console.log(slide);

    if (index !==0) slide.classList.add('hidden');

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function (){

        slide.classList.add('hidden');

        slide.removeAttribute('data-active');

        let nextSlideIndex = index + 1 === sliderItems.length ? 0: index + 1;

    })
});
        btnNext.onclick = function (){
    console.log('Next Slide');

            const currentSlide = slider.querySelector('[data-active]')
            const currentSlideIndex = +currentSlide.dataset.index;

            currentSlide.classList.add('hidden');
            currentSlide.removeAttribute('data-active');

            const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0: currentSlideIndex + 1;

            const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');

}


btnPrev.onclick = function (){
    console.log('Prev Slide');

    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    const nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1: currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

}
function showNextSlide(direction){
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;
    if (direction === 'next'){
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0: currentSlideIndex + 1;
    } else if (direction === 'prev'){
        nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1: currentSlideIndex - 1;
    }
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

document.querySelectorAll('.dot').forEach((item, index) => {
    item.setAttribute('data-slider-num', index);
});



document.querySelectorAll('.dot').forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        slider.style.left = +690 * e.target.getAttribute('data-slider-num') + 'px';
    });
})

