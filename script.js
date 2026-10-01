// ==========================================
// 1. Mensajes del Generador (Los Awawewiwos)
// ==========================================
const messages = [
  "Te amo muchisisimo cariño 😍",
  "Eres la persona más especial en mi vida 🥰",
  "Cada día a tu lado es un regalo 😘",
  "Mi niña bonita de ojitos bonitos 💖",
  "Eres la mujer de mi vida 💘",
  "Awawawawa 🥰",
  "Wishu wishu wishu 💞",
  "La mejor novia del mundo mundial 🌎",
  "Mi solecito ☀️",
  "Ailoviuuuuuuuuuuuuuuuuuu 💖",
  "Mi corazón de melón 🍉",
  "Mi gatobola 🐱",
  "Amochito C: ❤️",
  "Los Awawewiwos por siempre 🌟",
  "Verdadero AWAWEWIWO 🥰",
  "besho maksimo 💞",
  "TEAMOOOSADKJHDASK 💕",
  "Que bonita que eres ❤️",
  "Cozarón 💖",
  "Amochi de amochis 💘",
  "Bolillos 🐱",
  "Mi señora 😗",
  "ANIVERSARIOOOOOOO",
  "Feliz anito C: ",
  "Me caso contigo 💍",
];

// ==========================================
// 2. Contador de Tiempo Juntos
// ==========================================
// Comenzamos desde el 30 de septiembre del 2023
const startDate = new Date(2023, 8, 30, 0, 0, 0);

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const text = `${years} años, ${days} días, ${hours}h, ${minutes}m, ${seconds}s juntos ✨`;

  const counterBox = document.getElementById("time-counter");
  if (counterBox) counterBox.innerText = text;
}
setInterval(updateCounter, 1000); // Actualiza cada segundo
updateCounter();

// ==========================================
// 3. Generador de Cariñitos V2.0
// ==========================================
const loveButton = document.getElementById("love-button");
const bubblesContainer = document.getElementById("bubbles-container");

loveButton.addEventListener("click", (e) => {
  // --- Generar Burbuja de Mensaje ---
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  // Posición aleatoria DENTRO del panel
  const rect = bubblesContainer.getBoundingClientRect();
  const randomX = Math.max(10, Math.random() * (rect.width - 250));
  const randomY = Math.max(10, Math.random() * (rect.height - 100));

  bubble.style.left = randomX + "px";
  bubble.style.top = randomY + "px";

  bubblesContainer.appendChild(bubble);
  // Eliminar elemento después de la animación (6s)
  setTimeout(() => bubble.remove(), 6000);

  // --- Explosión de Corazones y Brillos ---
  const emojis = ["💖", "💕", "🌸", "✨", "🥰", "💋", "🩷", "🤍", "💜", "❤️‍🔥", "💘"];
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Físicas Aleatorias
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 150; // Qué tan lejos vuelan
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const rot = Math.random() * 360;

    // Pasamos variables css a la animación keyframe
    heart.style.setProperty("--tx", `${tx}px`);
    heart.style.setProperty("--ty", `${ty}px`);
    heart.style.setProperty("--rot", `${rot}deg`);

    // Iniciar explosión desde cualquier lugar del panel
    const rect = bubblesContainer.getBoundingClientRect();
    heart.style.left = (Math.random() * rect.width) + "px";
    heart.style.top = (Math.random() * rect.height) + "px";

    bubblesContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000); // Mismo tiempo que la duración de la explosión
  }
});

// ==========================================
// 4. Huellitas de Gato Mágicas (Click Global)
// ==========================================
document.addEventListener("click", (e) => {
  // Evitar huellas al interactuar con botones o navegación
  if (e.target.closest("button") || e.target.closest("a") || e.target.closest("canvas")) return;

  const paw = document.createElement("div");
  paw.className = "paw-print";

  const uniqueId = "curve-" + Math.random().toString(36).substr(2, 9);
  paw.innerHTML = `
    <svg viewBox="0 0 100 100" width="60" height="60" style="overflow: visible; filter: drop-shadow(0px 2px 4px rgba(255, 107, 139, 0.5)); transform: rotate(-10deg);">
      <path id="${uniqueId}" d="M 20 70 Q 50 10 80 70" fill="transparent" />
      <text font-family="'Outfit', sans-serif" font-size="22" fill="var(--primary)" font-weight="800">
        <textPath href="#${uniqueId}" startOffset="50%" text-anchor="middle">Amochi</textPath>
      </text>
    </svg>
  `;

  // Usar pageX y pageY para que considere el scroll actual
  paw.style.left = e.pageX + "px";
  paw.style.top = e.pageY + "px";

  document.body.appendChild(paw);
  // Limpiar huellita tras 1.5s
  setTimeout(() => paw.remove(), 1500);
});

// ==========================================
// 5. Animaciones al hacer Scroll (Reveal)
// ==========================================
const revealElements = document.querySelectorAll(".reveal, .scroll-reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    // Si entra a la pantalla (por arriba o por abajo) con un margen para que se note
    if (elementTop < windowHeight - revealPoint && elementBottom > revealPoint) {
      el.classList.add("active");
    } else {
      // Remover la clase para que la animación se repita al volver a scrollear
      el.classList.remove("active");
    }
  });
};

// Escuchar evento scroll
window.addEventListener("scroll", revealOnScroll);
// Ejecutar una vez al cargar
revealOnScroll();

// ==========================================
// 6. Efecto Canvas (Mosaico 14x14 Real)
// ==========================================
window.addEventListener("load", () => {
  const canvas = document.getElementById("mosaicCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const mainImg = document.getElementById("sourceImage");

  // Ajustar tamaño del canvas (Cuadrado perfecto adaptativo)
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

  // Cargar lista dinámica de 196 fotos
  fetch('mosaico_images.json')
    .then(response => response.json())
    .then(files => {
      if (mainImg.complete) initMosaic(files);
      else mainImg.onload = () => initMosaic(files);
    })
    .catch(err => console.error("Falta archivo mosaico_images.json", err));

  function initMosaic(files) {
    const cols = 14;
    const rows = 14;
    const tileW = canvas.width / cols;
    const tileH = canvas.height / rows;

    // Primero, dibujamos la foto principal suave como placeholder
    drawMainImageOverlay(0.2, "source-over");

    let loadedCount = 0;
    const totalTiles = cols * rows;

    let overlayApplied = false;
    const forceOverlay = () => {
      if (!overlayApplied) {
        overlayApplied = true;
        applyFinalMosaicEffect(cols, rows, tileW, tileH);
      }
    };

    // Respaldo de seguridad absoluta: forzar el dibujado final después de 4.5 segundos
    setTimeout(forceOverlay, 4500);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const fileIdx = (i * rows + j) % files.length;
        const miniImg = new Image();

        setTimeout(() => {
          miniImg.src = `mosaico_thumbs/${files[fileIdx]}`;
        }, Math.random() * 2500);

        miniImg.onload = () => {
          const scale = Math.max(tileW / miniImg.width, tileH / miniImg.height);
          const w = miniImg.width * scale;
          const h = miniImg.height * scale;
          const x = (i * tileW) + (tileW - w) / 2;
          const y = (j * tileH) + (tileH - h) / 2;

          ctx.save();
          ctx.beginPath();
          ctx.rect(i * tileW, j * tileH, tileW, tileH);
          ctx.clip();

          ctx.globalAlpha = 1.0;
          ctx.globalCompositeOperation = "source-over";
          ctx.drawImage(miniImg, x, y, w, h);
          ctx.restore();

          loadedCount++;
          if (loadedCount === totalTiles) {
            forceOverlay();
          } else if (overlayApplied) {
            // Si la foto principal ya se dibujó (por el temporizador de seguridad)
            // pero esta miniatura apenas cargó, redibujamos la foto principal encima.
            applyFinalMosaicEffect(cols, rows, tileW, tileH);
          }
        };

        miniImg.onerror = () => {
          loadedCount++;
          if (loadedCount === totalTiles) forceOverlay();
        };
      }
    }
  }

  function drawMainImageOverlay(alpha, blendMode) {
    const scale = Math.max(canvas.width / mainImg.width, canvas.height / mainImg.height);
    const w = mainImg.width * scale;
    const h = mainImg.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.globalCompositeOperation = blendMode;
    ctx.drawImage(mainImg, x, y, w, h);
    ctx.restore();
  }

  function applyFinalMosaicEffect(cols, rows, tileW, tileH) {
    // 1. Tinte fuerte de fusión
    drawMainImageOverlay(0.8, "overlay");
    // 2. Dibujar la imagen normal semi-transparente para asegurar que los rostros sean más claros
    drawMainImageOverlay(0.4, "source-over");

    // Dibujar cuadricula blanca final
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 1;

    for (let i = 0; i <= cols; i++) {
      ctx.beginPath(); ctx.moveTo(i * tileW, 0); ctx.lineTo(i * tileW, canvas.height); ctx.stroke();
    }
    for (let j = 0; j <= rows; j++) {
      ctx.beginPath(); ctx.moveTo(0, j * tileH); ctx.lineTo(canvas.width, j * tileH); ctx.stroke();
    }
  }

  // ===============================================
  // Interacciones de Zoom y Paneo Dinámico
  // ===============================================
  let currentZoom = 1;
  let currentPanX = 0;
  let currentPanY = 0;
  let isDragging = false;
  let startX, startY;
  let initialPinchDistance = null;
  let initialZoom = 1;

  const container = canvas.parentElement;

  function updateTransform() {
    canvas.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentZoom})`;
    canvas.style.transition = isDragging ? 'none' : 'transform 0.1s ease-out';
  }

  function limitPan() {
    const rect = container.getBoundingClientRect();
    const maxPanX = (rect.width * currentZoom - rect.width) / 2;
    const maxPanY = (rect.height * currentZoom - rect.height) / 2;
    currentPanX = Math.min(Math.max(currentPanX, -maxPanX), maxPanX);
    currentPanY = Math.min(Math.max(currentPanY, -maxPanY), maxPanY);
  }

  // --- MOUSE (Computadora) ---
  container.addEventListener("wheel", (e) => {
    e.preventDefault();
    const zoomAmount = -e.deltaY * 0.005;
    currentZoom = Math.min(Math.max(1, currentZoom + zoomAmount), 5);
    if (currentZoom === 1) { currentPanX = 0; currentPanY = 0; }
    updateTransform();
  });

  container.addEventListener("mousemove", (e) => {
    if (currentZoom > 1) {
      const rect = container.getBoundingClientRect();
      const pX = (e.clientX - rect.left) / rect.width;
      const pY = (e.clientY - rect.top) / rect.height;

      const maxPanX = (rect.width * currentZoom - rect.width) / 2;
      const maxPanY = (rect.height * currentZoom - rect.height) / 2;

      currentPanX = -((pX - 0.5) * maxPanX * 2);
      currentPanY = -((pY - 0.5) * maxPanY * 2);

      canvas.style.transition = 'transform 0.1s linear';
      canvas.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentZoom})`;
    }
  });

  // --- TACTIL (Celular) ---
  container.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      initialPinchDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      initialZoom = currentZoom;
    } else if (e.touches.length === 1 && currentZoom > 1) {
      isDragging = true;
      startX = e.touches[0].clientX - currentPanX;
      startY = e.touches[0].clientY - currentPanY;
    }
  });

  container.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && initialPinchDistance) {
      e.preventDefault();
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      currentZoom = Math.min(Math.max(1, initialZoom * (dist / initialPinchDistance)), 5);
      if (currentZoom === 1) { currentPanX = 0; currentPanY = 0; }
      updateTransform();
    } else if (e.touches.length === 1 && isDragging && currentZoom > 1) {
      e.preventDefault();
      currentPanX = e.touches[0].clientX - startX;
      currentPanY = e.touches[0].clientY - startY;
      limitPan();
      updateTransform();
    }
  });

  container.addEventListener("touchend", () => {
    isDragging = false;
    initialPinchDistance = null;
  });

});

// ==========================================
// 7. Efecto Corrupto de Bolillo
// ==========================================
const bolilloAvatar = document.getElementById("bolillo-avatar");
let bolilloClicks = 0;

if (bolilloAvatar) {
  bolilloAvatar.addEventListener("click", (e) => {
    if (bolilloAvatar.classList.contains("corrupt-avatar")) {
      bolilloClicks++;

      // Temblor al hacer click
      bolilloAvatar.style.transform = `scale(${1 + (bolilloClicks * 0.05)}) rotate(${Math.random() * 20 - 10}deg)`;

      if (bolilloClicks >= 5) {
        // Descorromper
        bolilloAvatar.classList.remove("corrupt-avatar");
        bolilloAvatar.style.transform = "scale(1) rotate(0deg)";
        bolilloAvatar.classList.add("glitch-flash");

        // Cambiar a la foto real
        const img = bolilloAvatar.querySelector("img");
        if (img) img.src = "michis/bolillo.jpg";

        // Restaurar textos originales
        const card = bolilloAvatar.parentElement;
        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");
        if (h3) {
          h3.innerText = "Bolillo";
          h3.classList.remove("glitch-text-dark");
        }
        if (p) p.innerText = '"Simplemente boli"';

        // Lluvia de michis al liberar a Bolillo!
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement("div");
          particle.className = "heart-particle";
          particle.innerText = "🍞";

          const angle = Math.random() * Math.PI * 2;
          const distance = 50 + Math.random() * 150;
          const tx = Math.cos(angle) * distance;
          const ty = Math.sin(angle) * distance;
          const rot = Math.random() * 360;

          particle.style.setProperty("--tx", `${tx}px`);
          particle.style.setProperty("--ty", `${ty}px`);
          particle.style.setProperty("--rot", `${rot}deg`);

          const rect = bolilloAvatar.getBoundingClientRect();
          particle.style.left = (rect.left + rect.width / 2) + "px";
          particle.style.top = (rect.top + rect.height / 2) + "px";

          document.body.appendChild(particle);
          setTimeout(() => particle.remove(), 2000);
        }
      }
    }
  });
}

// Lógica para el Modal de las fotos Polaroid y Carrusel
document.addEventListener("DOMContentLoaded", () => {
  const polaroids = document.querySelectorAll(".polaroid, .carousel-img");
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("photo-modal-img");
  const modalCaption = document.getElementById("photo-modal-caption");

  polaroids.forEach(polaroid => {
    polaroid.addEventListener("click", () => {
      // Si el elemento clickeado es directamente una imagen (carrusel) usamos ese, sino buscamos la etiqueta img dentro
      const img = polaroid.tagName.toLowerCase() === 'img' ? polaroid : polaroid.querySelector("img");
      if(img && modal && modalImg) {
        modalImg.src = img.src;
        // Usamos el alt de la imagen como pie de foto, si existe
        if(modalCaption) {
          modalCaption.innerText = img.alt || "";
          
          // Esperar a que la imagen cargue para saber su ancho real
          modalImg.onload = () => {
            // Limitar el ancho del texto al ancho real de la imagen en pantalla
            modalCaption.style.maxWidth = modalImg.clientWidth + "px";
          };
        }
        modal.classList.add("active");
      }
    });
  });
});

// Función para mover el carrusel manualmente
window.moveCarousel = function(btn, direction) {
  const carousel = btn.closest('.simple-carousel');
  const images = carousel.querySelectorAll('.carousel-img');
  let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  
  if (activeIndex > -1) {
    images[activeIndex].classList.remove('active');
  } else {
    activeIndex = 0;
  }
  
  activeIndex += direction;
  if(activeIndex < 0) activeIndex = images.length - 1;
  if(activeIndex >= images.length) activeIndex = 0;
  
  images[activeIndex].classList.add('active');
};
