{
  let position = 0;
  const slidesToShow = 2;
  const slidesToScroll = 2;

  const slider= document.querySelector('.slider');
  const sliderContainer= document.querySelector('.slider_container');
  const sliderTrack= document.querySelector('.slider_track');
  const sliderItems= document.querySelectorAll('.slider_item');
  const itemsCount= sliderItems.length;
  const sliderButtons= document.querySelector('.slider_buttons');
  const buttonPrev= document.querySelector('.button_prev');
  const buttonNext= document.querySelector('.button_next');
  const itemWidth = sliderContainer.clientWidth / slidesToShow; //set every item width
  const movePosition = slidesToScroll * itemWidth;

  function setSlidesWidth () {
    sliderItems.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });
  };
  
  buttonNext.addEventListener('click', () => {
    const itemsRemained = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsRemained >= slidesToScroll ? movePosition : itemsRemained * itemWidth;
    setPosition();
    checkBtns();
  })
  buttonPrev.addEventListener('click', () => {
    const itemsRemained = Math.abs(position) / itemWidth;
    position += itemsRemained >= slidesToScroll ? movePosition : itemsRemained * itemWidth;
    setPosition();
    checkBtns();
  });

  function setPosition() {
    sliderTrack.style.transform = `translateX(${position}px)`
  };
  function checkBtns() {
    buttonPrev.disabled = position === 0;
    buttonNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  }
  window.addEventListener('load', setSlidesWidth);
  window.addEventListener('resize', setSlidesWidth);
 
} 