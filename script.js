const progressBar = document.querySelector(".progress-bar");
const revealNodes = document.querySelectorAll(".reveal");
const leadForm = document.querySelector(".lead-form");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node) => revealObserver.observe(node));

window.addEventListener(
  "scroll",
  () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  },
  { passive: true }
);

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
