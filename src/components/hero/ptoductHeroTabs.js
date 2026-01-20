export function initHeroTabs() {
  const container = document.getElementById('product-hero_tab-block');
  if (!container) return;

  const tabs = container.querySelectorAll('.hero-tab-item');
  const ANIMATION_DURATION = 300;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const content = tab.querySelector('.hero-tab-content');
      const icon = tab.querySelector('.hero-tab-icon');
      const isActive = tab.classList.contains('active');

      if (!content) return;

      if (isActive) {
        tab.classList.remove('active', 'border-[#039869]');
        tab.classList.add('border-[#d2d2d2]');
        content.style.maxHeight = '0px';
        setTimeout(() => {
          content.classList.remove('pt-4');
        }, ANIMATION_DURATION);

        icon?.classList.remove('rotate-45');
      } else {
        tab.classList.add('active', 'border-[#039869]');
        tab.classList.remove('border-[#d2d2d2]');
        content.classList.add('pt-4');
        content.offsetHeight;
        content.style.maxHeight = content.scrollHeight + 'px';
        icon?.classList.add('rotate-45');
      }
    });
  });
}
