const personagens = document.querySelectorAll(".personagem");
const infos = document.querySelectorAll(".info");

personagens.forEach(p => {
  p.addEventListener("click", () => {
    const id = p.getAttribute("data-id");
    const info = document.getElementById(id);

    // Fecha todos os outros antes
    infos.forEach(i => {
      if (i !== info) i.style.display = "none";
    });

    // Alterna o atual
    info.style.display = (info.style.display === "block") ? "none" : "block";
  });
});
