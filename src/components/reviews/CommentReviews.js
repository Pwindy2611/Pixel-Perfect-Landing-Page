export const reviewsData = [
  {
    id: 1,
    author: "Anonymous",
    verified: true,
    rating: 3,
    date: "07/16/2025",
    title: "",
    content: "I don’t know yet hard to tell. They go down easily no side effects. We’ll see when the first bottle is finished if there’s a change. Kinda pricey. But if it works I’d pay even more only let’s see if it works.",
    images: [
      "https://judgeme.imgix.net/sculptique/1752663679__1752663592120-image__original.jpg?auto=format&w=160",
      "https://judgeme.imgix.net/sculptique/1752663682__1752663674935-image__original.jpg?auto=format&w=160"
    ]
  },
  {
    id: 2,
    author: "Fernanda Sandoval",
    verified: false,
    rating: 4,
    date: "02/03/2025",
    title: "Subtle but Noticeable Results",
    content: "Great results so far, just wish I started sooner!",
    images: []
  },
  {
    id: 3,
    author: "Angelica Hicks",
    verified: false,
    rating: 5,
    date: "02/02/2025",
    title: "Didn’t Expect These Results!",
    content: "I bought this on a whim and didn’t have high hopes, but I was shocked at how well it works. Within a couple of weeks, the dimples on my thighs looked less visible, and my skin tone was more even. I truly didn’t expect results like this from something I could use at home.",
    images: []
  },
  {
    id: 4,
    author: "Erica Watson",
    verified: false,
    rating: 5,
    date: "01/30/2025",
    title: "Works Even in My 40s",
    content: "I’m 45 and honestly thought it was too late to do anything about cellulite. Sculptique proved me wrong. My skin looks tighter, especially around my thighs and hips. I wish I had tried it sooner.",
    images: []
  },
  {
    id: 5,
    author: "Wendy Osborn",
    verified: false,
    rating: 5,
    date: "01/25/2025",
    title: "No More Photoshop Needed!",
    content: "I used to edit my legs in every photo. Since taking Sculptique, I feel confident posting unedited pics. The skin on my thighs looks way more even.",
    images: []
  },
  {
    id: 6,
    author: "Janet Greene",
    verified: false,
    rating: 5,
    date: "01/22/2025",
    title: "Smoother Legs After Years of Trying",
    content: "I’ve tried creams, scrubs, massages—you name it. Nothing really worked long-term. But Sculptique did what those couldn’t. After a few weeks of taking it consistently, my legs look firmer and feel so much smoother. Finally found something that works from the inside out.",
    images: []
  },
  {
    id: 7,
    author: "Herman Buckley",
    verified: true,
    rating: 5,
    date: "01/15/2026",
    title: "",
    content: "Seems to work going to order another bottle",
    images: []
  },
  {
    id: 8,
    author: "Anonymous",
    verified: true,
    rating: 5,
    date: "12/08/2025",
    title: "",
    content: "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working.",
    images: []
  },
  {
    id: 9,
    author: "Donabeth Houx",
    verified: true,
    rating: 5,
    date: "11/23/2025",
    title: "",
    content: "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
    images: []
  },
  {
    id: 10,
    author: "Lynda Sandora",
    verified: true,
    rating: 5,
    date: "11/09/2025",
    title: "",
    content: "Whenever I am sitting or laying down for awhile, I'm really stiff & I feel like my lower body doesn't belong to me. Almost immediately after taking these pills, I am no longer stiff & I move with ease! Thank you!",
    images: []
  },
  {
    id: 11,
    author: "Meg Christie",
    verified: true,
    rating: 5,
    date: "11/09/2025",
    title: "",
    content: "I had been having post menopausal acne, it has cleared up!",
    images: []
  }
];

export function initCommentReviewsLogic() {
    let currentFilter = null;
    let currentSort = 'most-recent';
    let currentPage = 1;
    const itemsPerPage = 5; // Số lượng review mỗi trang

    const listContainer = document.getElementById('reviews-list-container');
    const paginationContainer = document.getElementById('pagination-container');
    const loader = document.getElementById('review-loader');
    const seeAllBtn = document.getElementById('see-all-btn');
    const sortSelect = document.getElementById('sort-dropdown-select');
    const histogramRows = document.querySelectorAll('.histogram-row');

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => {
            const isFull = i < rating;
            return `<span class="${isFull ? 'text-[#FA8A8A] before:content-[\'\\e000\']' : 'text-[#e0e0e0] before:content-[\'\\e001\']'}"></span>`;
        }).join('');
    };

    // --- HÀM RENDER PHÂN TRANG ---
    const renderPagination = (totalItems) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            const isCurrent = i === currentPage;
            html += `<a class="jdgm-paginate__page ${isCurrent ? 'jdgm-curt' : ''}" 
                        data-page="${i}" role="button" tabindex="0">${i}</a>`;
        }

        if (currentPage < totalPages) {
            html += `<a class="jdgm-paginate__page jdgm-paginate__next-page" data-page="${currentPage + 1}" role="button"></a>`;
            html += `<a class="jdgm-paginate__page jdgm-paginate__last-page" data-page="${totalPages}" role="button"></a>`;
        }

        paginationContainer.innerHTML = html;

        // Gán sự kiện click cho các nút phân trang
        paginationContainer.querySelectorAll('.jdgm-paginate__page').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const newPage = parseInt(e.target.getAttribute('data-page'));
                if (newPage && newPage !== currentPage) {
                    currentPage = newPage;
                    renderReviews();
                    // Scroll lên đầu khu vực review khi chuyển trang
                    listContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    };

    const renderReviews = () => {
        loader.classList.remove('hidden');
        listContainer.style.opacity = '0.3';

        if (currentFilter) seeAllBtn.parentElement.classList.remove('invisible');
        else seeAllBtn.parentElement.classList.add('invisible');

        setTimeout(() => {
            let filtered = [...reviewsData];

            if (currentFilter) filtered = filtered.filter(r => r.rating === currentFilter);

            if (currentSort === 'highest-rating') filtered.sort((a, b) => b.rating - a.rating);
            else if (currentSort === 'lowest-rating') filtered.sort((a, b) => a.rating - b.rating);
            else if (currentSort === 'with-pictures') filtered = filtered.filter(r => r.images.length > 0);
            else filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

            // LOGIC PHÂN TRANG (PAGINATION SLICE)
            const startIndex = (currentPage - 1) * itemsPerPage;
            const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

            if (paginatedItems.length === 0) {
                listContainer.innerHTML = `<p class="py-10 text-center text-gray-400">No reviews found.</p>`;
            } else {
                listContainer.innerHTML = paginatedItems.map(rev => `
                    <div class="jdgm-rev border-t border-[rgba(250,138,138,0.1)] py-4">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex gap-0.5 font-['JudgemeStar'] text-[16px]">${renderStars(rev.rating)}</div>
                            <span class="text-[#7b7b7b] text-[12px]">${rev.date}</span>
                        </div>
                        <div class="flex items-center gap-2.5 mb-2">
                            <div class="relative w-9 h-9 bg-[#f2f2f2] flex items-center justify-center">
                                <svg class="w-5 h-5 text-[#FA8A8A]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                                ${rev.verified ? '<div class="absolute bottom-0 right-0 w-3 h-3 bg-[#FA8A8A] text-white flex items-center justify-center text-[8px]">✓</div>' : ''}
                            </div>
                            <span class="text-[#FA8A8A] font-bold text-[14px]">${rev.author}</span>
                            ${rev.verified ? '<span class="bg-[#FA8A8A] text-white text-[10px] px-1.5 py-0.5">Verified</span>' : ''}
                        </div>
                        <p class="text-[16px] leading-[1.4] text-black">${rev.content}</p>
                        ${rev.images.length > 0 ? `
                            <div class="flex gap-2 mt-4">
                                ${rev.images.map(img => `<div class="w-21.25 h-21.25 shrink-0"><img src="${img}" class="w-full h-full object-cover"></div>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('');
            }

            renderPagination(filtered.length);
            loader.classList.add('hidden');
            listContainer.style.opacity = '1';
        }, 400);
    };

    histogramRows.forEach(row => {
        row.addEventListener('click', () => {
            currentFilter = parseInt(row.getAttribute('data-star'));
            currentPage = 1;
            renderReviews();
        });
    });

    sortSelect?.addEventListener('change', (e) => {
        currentSort = e.target.value;
        currentPage = 1;
        renderReviews();
    });

    seeAllBtn?.addEventListener('click', () => {
        currentFilter = null;
        currentPage = 1;
        renderReviews();
    });

    renderReviews();
}
