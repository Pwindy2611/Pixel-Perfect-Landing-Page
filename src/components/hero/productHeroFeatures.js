export function renderProductHeroFeatures() {
  const featureItemClass = `
    flex items-center gap-3 my-4
    [&>div:first-of-type]:w-[10%]
    [&>div:first-of-type]:flex
    [&>div:first-of-type]:items-center
    [&>div:nth-child(2)]:w-full
    [&_p]:m-0
    [&_p]:text-[16px]
    [&_p]:leading-[1.3]
  `.trim();

  const features = [
    { img: '/src/assets/images/hero/population.png', text: 'Join over 93 Thousand who say - it WORKS!' },
    { img: '/src/assets/images/hero/blood.png', text: 'Restores your body’s natural 24-hour lymphatic cycle' },
    { img: '/src/assets/images/hero/thigh.png', text: 'Helps reduce fluid retention and the appearance of puffiness and bloating' },
    { img: '/src/assets/images/hero/smile.png', text: 'Helps fall asleep faster, stay asleep longer and wake up energized' },
    { img: '/src/assets/images/hero/blood1.png', text: 'Eliminates joint stiffness, pain, morning creakiness and feel more grounded' },
    { img: '/src/assets/images/hero/ecology.png', text: 'Boosts energy, mental clarity and emotional balance' },
  ];

  const ul = document.querySelector('#product-hero_features');
  if (!ul) return;

  ul.innerHTML = features.map(item => `
    <li class="${featureItemClass}">
      <div>
        <img class="block max-w-full h-auto"
             loading="lazy"
             src="${item.img}"
             alt="">
      </div>
      <div>
        <p>${item.text}</p>
      </div>
    </li>
  `).join('');
}
