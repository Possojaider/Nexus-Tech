document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('article-modal');
  const overlay = modal.querySelector('.article-modal__overlay');
  const closeBtn = modal.querySelector('.article-modal__close');
  const titleEl = modal.querySelector('.article-modal__title');
  const metaEl = modal.querySelector('.article-modal__meta');
  const descEl = modal.querySelector('.article-modal__desc');
  const imgEl = modal.querySelector('.article-modal__image');

  function openModal(data) {
    titleEl.textContent = data.title || '';
    metaEl.textContent = data.meta || '';
    descEl.textContent = data.desc || '';
    if (data.img) {
      imgEl.src = data.img;
      imgEl.alt = data.title || '';
      imgEl.style.display = '';
    } else {
      imgEl.style.display = 'none';
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-article').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = {
        title: btn.dataset.title,
        meta: btn.dataset.meta,
        desc: btn.dataset.desc,
        img: btn.dataset.img,
      };
      openModal(data);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
