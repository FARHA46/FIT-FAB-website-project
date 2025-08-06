function scrollImages(amount) {
  document.getElementById('slider').scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

