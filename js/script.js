
// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  
  // Selecciona todos los botones que cambian de pestaña y las secciones de contenido
  const botones = document.querySelectorAll('.btn-pestana');
  const secciones = document.querySelectorAll('.contenido-seccion');

  //MOVIMIENTO ENTRE PESTAÑAS

  // Asignación de una pestaña (evento, shooting...) a cada botón para activar la pestaña
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      // Quita la clase 'activo' de todos los botones
      botones.forEach(b => b.classList.remove('activo'));
      // Añade la clase 'activo' solo al botón pulsado
      boton.classList.add('activo');
      // Oculta todas las secciones
      secciones.forEach(sec => sec.classList.remove('activo'));
      // Muestra la sección correspondiente al botón pulsado
      document.getElementById(boton.dataset.tab).classList.add('activo');
    });
  });
  // Configuración de los botones de desplazamiento horizontal
  document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');

    // Botón izquierdo: para desplazar el clickeo hacia la izquierda
    container.querySelector('.carousel-button.left').addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    // Botón derecho: para desplazar el clickeo hacia la derecha
    container.querySelector('.carousel-button.right').addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });
});

  //NEWSLETTER

  // Manejo del formulario de suscripción al boletín
  const formulario = document.getElementById('formularioNewsletter');
  if (formulario) {
    formulario.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita el envío normal del formulario
      const nombre = document.getElementById('nombre').value.trim(); // Toma el nombre introducido

      // Valida que el campo nombre no esté vacío
      if (!nombre) {
        alert('Por favor, introduce tu nombre.');
        return;
      }

      // Muestra un mensaje de agradecimiento y resetea el formulario
      document.getElementById('gracias').style.display = 'block';
      alert('¡Gracias por suscribirte, ' + nombre + '!');
      this.reset();
    });
  }

