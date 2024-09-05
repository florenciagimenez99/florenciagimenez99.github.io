document.addEventListener('DOMContentLoaded', () => {
    // Datos de las galerías
    const tatuajes = [
      { src: 'imágenes/tatuaje1.jfif', title: 'Tatuaje 1', text: 'Neotribal' },
      { src: 'imágenes/tatuaje2.jfif', title: 'Tatuaje 2', text: 'Lettering' },
      { src: 'imágenes/tatuaje3.jfif', title: 'Tatuaje 3', text: 'Estilo personalizado' },
      { src: 'imágenes/tatuaje4.jfif', title: 'Tatuaje 4', text: 'Anime' },
      { src: 'imágenes/tatuaje5.jfif', title: 'Tatuaje 5', text: 'Neotribal' },
      { src: 'imágenes/tatuaje6.jfif', title: 'Tatuaje 6', text: 'Anime / Abstracto' },
    ];
  
    const piercings = [
      { src: 'imágenes/piercing1.jfif', title: 'Piercing 1', text: 'Nipple' },
      { src: 'imágenes/piercing2.jfif', title: 'Piercing 2', text: 'Smile' },
      { src: 'imágenes/piercing3.jfif', title: 'Piercing 3', text: 'Philtrum/Medusa' },
      { src: 'imágenes/piercing4.jfif', title: 'Piercing 4', text: 'Septum' },
      { src: 'imágenes/piercing5.jfif', title: 'Piercing 5', text: 'Nostril' },
      { src: 'imágenes/piercing6.jfif', title: 'Piercing 6', text: 'Eyebrow' },
      { src: 'imágenes/piercing7.jfif', title: 'Piercing 7', text: 'vertical labret' },
    ];
  
    // Función para crear una tarjeta
    function createCard(image) {
      return `
        <div class="card mx-2 my-3" style="flex: 0 0 auto; width: 18rem;">
          <img src="${image.src}" class="card-img-top" alt="${image.title}" style="height: 12rem; object-fit: cover;">
          <div class="card-body">
            <p class="card-text">${image.text}</p>
          </div>
        </div>
      `;
    }
  
    // Insertar las tarjetas en las galerías
    const tatuajesContainer = document.getElementById('galeria-tatuajes');
    tatuajes.forEach(image => {
      tatuajesContainer.innerHTML += createCard(image);
    });
  
    const piercingsContainer = document.getElementById('galeria-piercings');
    piercings.forEach(image => {
      piercingsContainer.innerHTML += createCard(image);
    });
  
    // Función para desplazar las galerías
    function scrollGallery(container, direction) {
      const scrollAmount = 200; // Cantidad de desplazamiento
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  
    // Eventos de los botones de navegación
    document.getElementById('prev-tatuajes').addEventListener('click', () => {
      scrollGallery(document.getElementById('galeria-tatuajes'), 'left');
    });
  
    document.getElementById('next-tatuajes').addEventListener('click', () => {
      scrollGallery(document.getElementById('galeria-tatuajes'), 'right');
    });
  
    document.getElementById('prev-piercings').addEventListener('click', () => {
      scrollGallery(document.getElementById('galeria-piercings'), 'left');
    });
  
    document.getElementById('next-piercings').addEventListener('click', () => {
      scrollGallery(document.getElementById('galeria-piercings'), 'right');
    });
  });
  