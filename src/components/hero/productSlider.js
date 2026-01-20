export function initProductSlider() {
    const track = document.getElementById('imageTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const thumbs = document.querySelectorAll('.thumb-item');

    if (!track || !nextBtn || !prevBtn) return;

    let currentIndex = 0;
    const totalSlides = thumbs.length;

    function updateSlider(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        thumbs.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('border-black', 'opacity-100');
                thumb.classList.remove('opacity-70', 'border-gray-200');
            } else {
                thumb.classList.remove('border-black', 'opacity-100');
                thumb.classList.add('opacity-70', 'border-gray-200');
            }
        });
        
        currentIndex = index;
    }
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider(currentIndex);
    });

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => updateSlider(index));
    });
}