export function initProductFAQ() {
  const faqItems = document.querySelectorAll('.product_faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const contentWrapper = item.querySelector('.faq-content');
      const svg = item.querySelector('svg');
      
      if (!contentWrapper || !svg) return;
      const isOpen = contentWrapper.classList.contains('grid-rows-[1fr]');

      if (isOpen) {
        contentWrapper.classList.remove('grid-rows-[1fr]');
        contentWrapper.classList.add('grid-rows-[0fr]');
        svg.style.transform = 'rotate(0deg)';
      } else {
        contentWrapper.classList.remove('grid-rows-[0fr]');
        contentWrapper.classList.add('grid-rows-[1fr]');
        svg.style.transform = 'rotate(180deg)';
      }
    });
  });
}