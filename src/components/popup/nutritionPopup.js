export function initNutritionPopup() {
  const openBtn = document.getElementById('product-hero_btn-Nutritional');
  const popup = document.getElementById('nutrition_popup');
  const closeBtn = document.getElementById('nutrition_popup_close');

  if (!openBtn || !popup) return;
  openBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.classList.add('hidden');
    });
  }
  popup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
  const modalContent = popup.querySelector('.bg-white');
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
}
