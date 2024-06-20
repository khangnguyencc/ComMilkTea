// Chức năng đánh giá ngôi sao
const stars = document.querySelectorAll('.form-star i');
const defaultColor = getComputedStyle(stars[0]).color;
stars.forEach((star, index) => {
  star.addEventListener('mouseenter', () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.style.color = 'gold';
      } else if (i >= index) {
        s.style.color = defaultColor;
      } else {
        s.style.color = '#7d7474';
      }
    });
  });
});



