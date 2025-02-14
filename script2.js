const btnNo = document.getElementById('btnNo');

const moveButton = () => {
  // Genera posiciones aleatorias dentro de la ventana
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

  // Mueve el botón a la nueva posición
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
};

// Evento para computadoras (mouseover)
btnNo.addEventListener('mouseover', moveButton);

// Evento para móviles (touchstart)
btnNo.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Evita el comportamiento por defecto del touch
  moveButton();
});

btnNo.addEventListener('click', () => {
  alert("¡Ja! ¡No puedes decir que no!");
});