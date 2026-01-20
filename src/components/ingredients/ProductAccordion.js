export function initProductAccordion() {
  document.querySelectorAll('.product-lymph-ingredient').forEach(item => {
    if (item.dataset.accordionInit) return
    item.dataset.accordionInit = 'true'

    item.addEventListener('click', () => {
      const content = item.querySelector('.accordion-content')
      if (!content) return

      const isOpen = content.style.gridTemplateRows === '1fr'

      content.style.gridTemplateRows = isOpen ? '0fr' : '1fr'
      item.classList.toggle('is-open', !isOpen)
    })
  })
}
