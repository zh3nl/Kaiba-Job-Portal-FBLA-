let navbar = document.querySelector('.header .flex .navbar'); 

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active'); 
}

window.onscroll = () => {
    navbar.classList.remove('active'); 
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if(inputNumber.value.length > inputNumber.maxLength) {
            inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength); 
        }
    };
}); 

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop:true, 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });