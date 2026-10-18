(function setObserver() {
  const target = document.querySelector('.text');
  const options = { trashold: 0.9 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector('.illustration').style.opacity = 0.4;
      } else {
        document.querySelector('.illustration').style.opacity = 1;
      }
    });
  });
  observer.observe(target, options);
})();