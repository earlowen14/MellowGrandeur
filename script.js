
$(document).ready(function() {
    $('#toggleHand').click(function() {
      $('#SmallHand').toggleClass('d-none');
      if ($('#SmallHand').hasClass('d-none')) {
        $(this).text('More Services');
      } else {
        $(this).text('Close');
      }
    });
  
    $('#toggleEyelash').click(function() {
      $('#SmallEyelash').toggleClass('d-none');
      if ($('#SmallEyelash').hasClass('d-none')) {
        $(this).text('More Services');
      } else {
        $(this).text('Close');
      }
    });
  
    $('#toggleWax').click(function() {
      $('#SmallWax').toggleClass('d-none');
      if ($('#SmallWax').hasClass('d-none')) {
        $(this).text('More Services');
      } else {
        $(this).text('Close');
      }
    });
  });
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  document.getElementById("prevBtn").addEventListener("click", function() {
    slideIndex--;
    showSlides();
  });

  document.getElementById("nextBtn").addEventListener("click", function() {
    slideIndex++;
    showSlides();
  });