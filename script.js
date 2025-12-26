const messages = [
  "Te amo muchisisimo cariño 😍",
  "Eres la persona más especial en mi vida 🥰",
  "Cada día a tu lado es un regalo 😘",
  "Mi niña bonita de ojitos bonitos 💖",
  "Eres la mujer de mi vida 💘",
  "Siempre estás en mis pensamientos y en mi corazón 💞",
  "La persona más maravillosa que he conocido eres tú ❤️",
  "Eres mi razón de ser y mi felicidad 🌹",
  "Awawawawa 🥰",
  "Wishu wishu wishu 💞",
  "Dia de MI noviaaaaaaaaa 🥳",
  "La mejor novia del mundo mundial 🌎",
  "Un besho 💋",
  "Me haces tan feliz cada día 😄",
  "Mi solecito ☀️",
  "Ailoviuuuuuuuuuuuuuuuuuu 💖",
  "Mi corazón de melón 🍉",
  "Cozarón",
  "Mi mundo entero🌹",
  "Te quiero un montón 💕",
  "Te adoro con todo mi ser 💗",
  "Te admiro por ser tan increíble 💪",
  "Te recontramegasuper amo 💘",
  "Verdadero AWAWEWIWO 🥰",
  "besho maksimo 💞",
  "Amochito C:",
  "TEAMOOOSADKJHDASK",
  "felis birday jijija",
  "Mi gatobola",
  "Que bonita que eres ❤️"
];

function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  // Se añade temporalmente para medir su tamaño
  document.body.appendChild(bubble);

  const bubbleWidth = bubble.offsetWidth;
  const bubbleHeight = bubble.offsetHeight;

  const maxLeft = window.innerWidth - bubbleWidth;
  const maxTop = window.innerHeight - bubbleHeight;

  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  bubble.style.left = left + "px";
  bubble.style.top = top + "px";

  // Ahora sí lo agregamos al contenedor
  document.getElementById("bubbles-text").appendChild(bubble);

  setTimeout(() => bubble.remove(), 8000);
}

setInterval(createTextBubble, 500);

const loveButton = document.getElementById("love-button");

const colors = ["#ff6b81", "#ffcc70", "#70e1f5", "#c471ed", "#fbc2eb"];
let colorIndex = 0;

loveButton.addEventListener("click", () => {
  // 1️⃣ Mostrar el mensaje flotante "Te amo 💖"
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = "Feliz cum 💖";

  document.body.appendChild(bubble);

  const bubbleWidth = bubble.offsetWidth;
  const bubbleHeight = bubble.offsetHeight;

  const maxLeft = window.innerWidth - bubbleWidth;
  const maxTop = window.innerHeight - bubbleHeight;

  bubble.style.left = Math.random() * maxLeft + "px";
  bubble.style.top = Math.random() * maxTop + "px";

  document.getElementById("bubbles-text").appendChild(bubble);

  setTimeout(() => bubble.remove(), 4000);

  // 2️⃣ Cambiar color del botón
  loveButton.style.background = colors[colorIndex];
  loveButton.style.color = "#fff";
  colorIndex = (colorIndex + 1) % colors.length;

  // 3️⃣ Lanzar corazoncitos animados
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = (loveButton.offsetLeft + 30 + Math.random() * 40) + "px";
    heart.style.top = (loveButton.offsetTop - 10) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});



