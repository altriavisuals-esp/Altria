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
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<title>Privacidad — Altria Visuals</title>
<link rel="stylesheet" href="css/style.css" />
</head>
<body style="padding:40px;">
<h1>Política de Privacidad</h1>
<p>Este sitio no recopila datos personales excepto cuando el usuario contacta mediante WhatsApp. Ninguna información se almacena en servidores propios.</p>
<p>El uso de este sitio implica la aceptación de estas condiciones.</p>
</body>
</html>
```


---
