document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los botones de compra usando la clase que se ve en tu imagen
  const botonesComprar = document.querySelectorAll(".producto_boton");

  botonesComprar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      // Buscamos el contenedor principal (el article o card) más cercano al botón
      const tarjeta = boton.closest("article"); 

      // Extraemos el nombre del producto (está dentro del h3)
      const nombreProducto = tarjeta.querySelector(".producto_contenido h3").textContent.trim();

      // Extraemos la ruta de la imagen (el src de la etiqueta img)[cite: 1]
      const imagenSrc = tarjeta.querySelector(".producto_imagen img").src;

      // Tu número de WhatsApp (código de país + área + número, solo dígitos)
      const telefono = "5493816641686"; // Reemplaza con tu número de Tucumán

      // Armamos el mensaje
      const mensaje = `¡Hola! Me interesa este producto 😁: *${nombreProducto}*.\n\nAquí puedes ver la imagen:\n${imagenSrc}`;

      // Codificamos y abrimos WhatsApp
      const mensajeCodificado = encodeURIComponent(mensaje);
      const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
      
      window.open(urlWhatsApp, "_blank");
    });
  });
});