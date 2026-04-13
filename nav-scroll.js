/**
 * Peak to Pacific — Nav Scroll Behavior
 * Makes the nav transparent over hero photos, solid after scrolling.
 */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // run once on load
})();
