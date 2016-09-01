$(document).ready(function(){

var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('toggler-close');
    document.getElementById('nav').classList.toggle('mobile-nav-visible');
  }

  var owl = $('#carousel-first');
  owl.owlCarousel({
    'items': 1,
    'loop': true,
  });

  $('#photo .carousel-next').on('click', function(){
    owl.trigger('next.owl.carousel');
  })
  $('#photo .carousel-prev').on('click', function(){
    owl.trigger('prev.owl.carousel');
  });

});