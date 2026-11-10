(() => {
  // Replace this one URL with the approved affiliate link when available.
  const offerUrl = "https://www.testosil.com/";

  document.querySelectorAll(".offer-link").forEach((link) => {
    link.href = offerUrl;
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }

  document.querySelectorAll(".accordion details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      document.querySelectorAll(".accordion details").forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });
})();
