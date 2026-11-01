// ============================================
// CONFIGURACIÓN - Cambia estos valores
// ============================================

// Fecha de inicio de la relación (año, mes-1, día)
// Ejemplo: 15 de marzo de 2024 → new Date(2024, 2, 15)
const startDate = new Date(2026, 3, 12); // 12 de abril de 2026

// Lista de fotos (agrega más si quieres)
const photos = [
  { src: "images/856c6d7b-bf94-48ee-9fde-b4f40f54d01f.JPG", alt: "Juntos en el bosque" },
  { src: "images/77b92cb9-97b2-498e-9c65-4f1e33c2bdbc.JPG", alt: "Selfie juntos" },
  { src: "images/308ceb11-d61e-452f-8bdb-030769bf0f95.jpg", alt: "En la iglesia" },
  { src: "images/0f89896c-b262-4175-a3bb-a3fbe93d8dc6.jpg", alt: "Selfie de noche" },
  { src: "images/a591c87d-fd8b-4f7e-8fb2-f64e3ccffc19.JPG", alt: "Con su laptop" },
  { src: "images/de718235-a22b-44ff-97ef-6e933be5ecf5.JPG", alt: "Selfie juntos 2" },
  { src: "images/1bf62adc-b92b-4b59-90a1-9c4b9f8c7c99.JPG", alt: "Cabeza con cabeza" },
  { src: "images/3c64b672-01af-493a-9453-b8146d200f1e.JPG", alt: "Abrazo especial" },
  { src: "images/38ed5d7b-6c81-4887-949b-5a5cefac30c5.JPG", alt: "Con la cruz de Jesús" },
  { src: "images/90c7131e-d431-4878-9e24-023657cd40a9.jpg", alt: "Espejo con flores" },
  { src: "images/28934a65-015a-4a20-b67e-b8e248706ba1.JPG", alt: "En el baño" },
  { src: "images/d0917e26-4410-48c5-b8c8-40d2d01a4070.jpg", alt: "Cardigan rosa" },
  { src: "images/5cf545aa-4721-413e-a288-c41bcf41c5a0.JPG", alt: "You are beautiful" },
  { src: "images/1c4954f4-3438-45b0-8971-edbe3c271790.JPG", alt: "Con los Simpsons" },
  { src: "images/6e2688b6-9501-42e6-98fb-cc120172db21.JPG", alt: "Selfie rosa" },
  { src: "images/11aec795-af4b-4d9b-9b33-cab1c183d48f.jpg", alt: "En el baño gris" },
  { src: "images/dd3ab0b1-fb5b-4de5-91e2-742f222e8afd.JPG", alt: "En la naturaleza" },
  { src: "images/9d15db53-5470-4be7-9e00-03ab8a34943a.JPG", alt: "Sonrisa" },
];

// ============================================
// CONTADOR DE DÍAS
// ============================================
function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

updateCounter();
setInterval(updateCounter, 60000); // actualiza cada minuto

// ============================================
// GALERÍA
// ============================================
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

photos.forEach((photo) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  
  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.alt;
  img.loading = "lazy";
  
  // Si la imagen no carga, ocultar el item
  img.onerror = () => {
    item.style.display = "none";
  };
  
  item.appendChild(img);
  gallery.appendChild(item);
  
  item.addEventListener("click", () => {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
