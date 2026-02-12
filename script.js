document.addEventListener("DOMContentLoaded", function() {

  const countdown = document.getElementById("countdown");
  const eventDate = new Date("April 17, 2026 00:00:00").getTime();

  function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
          countdown.innerHTML = "La promoción ya comenzó";
          return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      countdown.innerHTML = `⏳ Faltan ${days} días y ${hours} horas`;
  }

  setInterval(updateCountdown, 3600000);
  updateCountdown();

  const reveals = document.querySelectorAll(".reveal");
  function revealOnScroll() {
      reveals.forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight - 100) {
              el.classList.add("active");
          }
      });
  }
  window.addEventListener("scroll", revealOnScroll);

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  const form = document.getElementById("reservaForm");
  if (form) {
      form.addEventListener("submit", function(e){
          e.preventDefault();
          const nombre = document.getElementById("nombre").value;
          const telefono = document.getElementById("telefono").value;
          const mensaje = `Hola soy ${nombre}, mi teléfono es ${telefono} y quiero reservar el paquete de Semana Santa en Hotel Diva.`;
          window.open(`https://wa.me/5492235033585?text=${encodeURIComponent(mensaje)}`, "_blank");
      });
  }

});
