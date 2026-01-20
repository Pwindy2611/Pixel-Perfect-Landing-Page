export function initMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;

  const logos = Array.from(track.children);
  const container = track.parentElement;

  while (track.scrollWidth < container.offsetWidth * 1) {
    logos.forEach(logo => {
      track.appendChild(logo.cloneNode(true));
    });
  }
}
