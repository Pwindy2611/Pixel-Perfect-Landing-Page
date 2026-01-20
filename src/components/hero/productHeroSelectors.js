export function initProductSelector() {
  const blocks = document.querySelectorAll('.selector-block');

  const subscriptionText = document.querySelector(
    '#product-hero_subscription-text .pr-4 p'
  );

  if (!blocks.length || !subscriptionText) return;

  blocks.forEach(block => {
    block.addEventListener('click', () => {
      // Active card
      blocks.forEach(b => b.classList.remove('active'));
      block.classList.add('active');

      // Update text
      const text = block.dataset.subscription;
      if (text) {
        subscriptionText.textContent = text;
      }
    });
  });

  // Active mặc định card đầu
  blocks[0].classList.add('active');
  if (blocks[0].dataset.subscription) {
    subscriptionText.textContent = blocks[0].dataset.subscription;
  }
}
