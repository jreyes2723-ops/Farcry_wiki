const siteMenu = `
    <div class="logo">FAR CRY 4 <span>WIKI</span></div>
    <ul class="nav-links">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="personajes.html">Personajes</a></li>
        <li><a href="facciones.html">Facciones</a></li>
    </ul>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Insertar el menú en el elemento con id "mainNav"
    const navElement = document.getElementById("mainNav");
    if (navElement) {
        navElement.innerHTML = siteMenu;
    }

    // Animación de entrada para los contenedores
    const mainContainer = document.querySelector(".container");
    if (mainContainer) {
        mainContainer.style.opacity = "0";
        mainContainer.style.transform = "translateY(20px)";
        mainContainer.style.transition = "all 0.8s ease-out";
        
        setTimeout(() => {
            mainContainer.style.opacity = "1";
            mainContainer.style.transform = "translateY(0)";
        }, 100);
    }
});