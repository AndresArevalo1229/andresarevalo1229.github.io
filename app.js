const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      const previous = button.textContent;
      button.textContent = "Email copiado";
      window.setTimeout(() => {
        button.textContent = previous;
      }, 1600);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  });
});
