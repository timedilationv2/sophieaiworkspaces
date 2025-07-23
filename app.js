const content = {
  links: "🔗 Your saved links panel.",
  notes: "📝 Take quick notes here.",
  flashcards: "📚 Flip flashcards for rapid recall.",
  miniword: "🗒️ Type in your mini word doc.",
};

document.querySelectorAll(".sidebar button[data-panel]").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.getAttribute("data-panel");
    document.getElementById("panel-content").innerHTML = content[panel];
  });
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

