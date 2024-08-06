let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log(slideIndex)
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
//setInterval(() => {
  //plusSlides(1);
//}, 5000); // Change image every 5 seconds

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    var btnContent = document.getElementById('btn-content');
    if (sidebar.classList.contains('open')) {
        btnContent.textContent = '✕'; // Change to X when sidebar is open
    } else {
        btnContent.textContent = '☰'; // Change back to ☰ when sidebar is closed
    }
}



