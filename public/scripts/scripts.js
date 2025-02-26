
window.onscroll = function () {
    const scrollButton = document.getElementById('scroll-to-top');
    if (document.documentElement.scrollTop > 200) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  