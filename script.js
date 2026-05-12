const progressBar = document.querySelector(".progress-bar");
const revealNodes = document.querySelectorAll(".reveal");
const leadForm = document.querySelector(".lead-form");
const header = document.querySelector(".site-header");
const heroImage = document.querySelector(".hero-image");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.16 }
);

revealNodes.forEach((node, index) => {
  node.style.setProperty("--reveal-delay", `${Math.min(index * 75, 360)}ms`);
  revealObserver.observe(node);
});

const updateScrollEffects = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  }

  if (heroImage) {
    const shift = Math.min(window.scrollY * 0.12, 64);
    heroImage.style.setProperty("--hero-shift", `${shift}px`);
  }
};

window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = leadForm.querySelector("button");
    button.textContent = "Solicitud enviada";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Solicitar llamada";
      button.disabled = false;
      leadForm.reset();
    }, 2400);
  });
}
