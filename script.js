document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  menuButton?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
    const icon = menuButton.querySelector("i");
    if (icon) {
      icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
      if (window.lucide) window.lucide.createIcons();
    }
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
      const icon = menuButton?.querySelector("i");
      if (icon) {
        icon.setAttribute("data-lucide", "menu");
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const recipient = "halo@fanzylumina.example"; // Ganti dengan email bisnis yang benar.
    const subject = encodeURIComponent("Pesan website Fanzy Lumina — " + data.get("topic"));
    const body = encodeURIComponent(
      "Nama: " + data.get("name") + "\\n" +
      "Email: " + data.get("email") + "\\n" +
      "Topik: " + data.get("topic") + "\\n\\n" +
      "Pesan:\\n" + data.get("message")
    );
    if (note) note.textContent = "Aplikasi email akan dibuka. Ganti alamat email contoh di js/script.js sebelum website dipublikasikan.";
    window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  });
});
