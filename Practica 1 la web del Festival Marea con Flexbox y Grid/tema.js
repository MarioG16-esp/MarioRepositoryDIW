const root = document.documentElement;
const boton = document.getElementById("tema");

// 1. Recuperar la elección guardada (si existe)
try {
  const guardado = localStorage.getItem("tema");
  if (guardado) root.dataset.theme = guardado;
} catch (e) {}

// 2. Saber qué tema se está viendo ahora
function temaActual() {
  return (
    root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

// 3. Alternar y guardar
boton.addEventListener("click", () => {
  const nuevo = temaActual() === "dark" ? "light" : "dark";
  root.dataset.theme = nuevo;
  try { localStorage.setItem("tema", nuevo); } catch (e) {}
});