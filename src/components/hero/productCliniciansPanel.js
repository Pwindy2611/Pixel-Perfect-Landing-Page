export function initCliniciansPanel() {
  const panel = document.getElementById('product-hero_Clinicians');
  const closeBtn = document.getElementById('close-button');

  if (!panel || !closeBtn) return;

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    panel.classList.remove('translate-x-0', 'opacity-100');
    panel.classList.add('-translate-x-full', 'opacity-0', 'pointer-events-none');
  });
}
