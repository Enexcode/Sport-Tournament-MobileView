$('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: false,
  });


document.querySelectorAll('.weeks_num_dis').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault(); // ক্লিক ইভেন্ট রোধ করে
    });
});