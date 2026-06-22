const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

reveals.forEach((item) => observer.observe(item));

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      serviceCards.forEach((card) => card.classList.remove("is-active"));
      entry.target.classList.add("is-active");
    });
  },
  {
    rootMargin: "-30% 0px -45% 0px",
    threshold: 0.35,
  }
);

serviceCards.forEach((card) => serviceObserver.observe(card));
