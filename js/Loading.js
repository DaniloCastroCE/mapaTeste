class Loading {
  constructor(id) {
    this.loading = document.querySelector(`#${id}`);

    // Quando a animação de saída terminar, esconde o elemento
    this.loading.addEventListener('animationend', (e) => {
      if (e.animationName === 'animationFadeOut') {
        this.loading.style.display = 'none';
      }
    });
  }

  in() {
    this.loading.style.display = "flex";

    if (!this.loading.classList.contains('anamationFadeIn') &&
      !this.loading.classList.contains('anamationFadeOut')) {
      this.loading.classList.add('anamationFadeIn');
    }
    else if (this.loading.classList.contains('anamationFadeOut')) {
      this.loading.classList.remove('anamationFadeOut');
      void this.loading.offsetWidth;
      this.loading.classList.add('anamationFadeIn');
    }
  }

  out() {
    if (this.loading.classList.contains('anamationFadeIn')) {
      this.loading.classList.remove('anamationFadeIn');
      this.loading.classList.add('anamationFadeOut');
    }
  }
}
