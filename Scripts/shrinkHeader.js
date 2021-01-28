// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 33 || document.documentElement.scrollTop > 33) {
    document.getElementById('MainBanner').style.backgroundPosition = "center";
  } 
  else if(document.body.scrollTop > 99 || document.documentElement.scrollTop > 99)
  {
    document.getElementById('MainBanner').style.backgroundPosition = "bottom";
  }
  else {
    document.getElementById('MainBanner').style.backgroundPosition = "top";
  }
}