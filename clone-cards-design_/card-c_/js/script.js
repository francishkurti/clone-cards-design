var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

var sizes = document.querySelectorAll('.size');
sizes.forEach(function(size) {
  size.addEventListener('click', function() {
    sizes.forEach(function(s) {
      s.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});

var sizes = document.querySelectorAll('.size');
sizes.forEach(function(size) {
  size.addEventListener('click', function() {
    sizes.forEach(function(s) {
      s.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});

var colors = document.querySelectorAll('.color');
colors.forEach(function(color) {
  color.addEventListener('click', function() {
    colors.forEach(function(c) {
      c.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});