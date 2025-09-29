"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Create nav element
    const nav = document.createElement("nav");
    // Logo section (10%)
    const logoLink = document.createElement("a");
    logoLink.classList.add("logo");
    logoLink.href = "index.html";
    const logoImg = document.createElement("img");
    logoImg.src = "images/kidgarWordart.jpeg";
    logoImg.alt = "Kidgar Logo";
    logoLink.appendChild(logoImg);
    // Menu section (90%)
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    const links = [
        { name: "Home", href: "index.html" },
        { name: "About", href: "about.html" },
        { name: "Breweries", href: "breweries.html" },
        { name: "Contact", href: "contact.html" },
    ];
    links.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.name;
        menuDiv.appendChild(a);
    });
    nav.appendChild(logoLink);
    nav.appendChild(menuDiv);
    document.body.prepend(nav);
});
