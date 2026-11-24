const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();


// Light / dark mode toggle. The chosen theme is saved in this browser.
(() => {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const root = document.documentElement;
  const icon = button.querySelector(".theme-icon");
  const label = button.querySelector(".theme-label");

  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    if (icon) icon.textContent = isDark ? "☀" : "☾";
    if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
  };

  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  applyTheme(savedTheme);

  button.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("portfolio-theme", next);
  });
})();
