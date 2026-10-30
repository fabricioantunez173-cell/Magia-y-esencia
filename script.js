function comprarProducto(nombre, urlImagen) {
  const telefono = "5493816641686"; 
  const mensaje = `¡Hola! Me interesa este producto 😁: *${nombre}*.\n\nAquí puedes ver la imagen:\n${urlImagen}`;
  const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  
  window.location.href = urlWhatsApp;
}