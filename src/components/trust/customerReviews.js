export function initCustomerReviews() {
  const track = document.getElementById('video-track');
  const thumb = document.getElementById('scroll-thumb');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const videoCards = document.querySelectorAll('.video-card');

  if (!track || !thumb) return;
  videoCards.forEach(card => {
    const video = card.querySelector('video');
    const overlay = card.querySelector('.play-overlay');

    card.addEventListener('click', () => {
      document.querySelectorAll('video').forEach(v => {
        if (v !== video) {
          v.pause();
          v.parentElement.querySelector('.play-overlay').style.opacity = '1';
        }
      });

      if (video.paused) {
        video.play();
        overlay.style.opacity = '0';
      } else {
        video.pause();
        overlay.style.opacity = '1';
      }
    });

    video.addEventListener('ended', () => {
      overlay.style.opacity = '1';
    });
  });
  const updateProgress = () => {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      thumb.style.left = "0%";
      return;
    }
    const scrollPercent = (scrollLeft / maxScroll) * 100;
    const thumbWidth = parseFloat(thumb.style.width) || 15;
    const moveRange = 100 - thumbWidth; 
    const finalLeft = (scrollPercent / 100) * moveRange;
    thumb.style.left = `${finalLeft}%`;
  };

  track.addEventListener('scroll', updateProgress);
  const scrollAmount = 300;

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  updateProgress();
}