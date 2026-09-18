async function loadIncludes() {
  const includeElements = document.querySelectorAll('[data-include]');

  for (const element of includeElements) {
    const file = element.getAttribute('data-include');

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
      element.innerHTML = await response.text();
    } catch (error) {
      element.innerHTML = `<p style="padding:1rem;color:#b00020;">Não foi possível carregar o componente: ${file}</p>`;
      console.error(error);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadIncludes);
