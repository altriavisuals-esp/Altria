```javascript
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".cerrar");


document.querySelectorAll(".galeria img").forEach(img => {
img.addEventListener("click", () => {
lightImg.src = img.src;
lightbox.style.display = "flex";
});
});


closeBtn.addEventListener("click", () => {
lightbox.style.display = "none";
});
```


---
# 🔐 privacy.html (COMPLETO)
```html
