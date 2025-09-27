// const menuHTML = `
// <nav>
//   <ul>
//     <li><a href="index.html">Home</a></li>
//     <li><a href="about.html">About</a></li>
//     <li><a href="contact.html">Contact</a></li>
//   </ul>
// </nav>
// `;

// // Insert the menu into the page
// document.getElementById('menu').innerHTML = menuHTML;

// text only
// document.addEventListener("DOMContentLoaded", function () {
//   const nav = document.createElement("nav");

//   nav.innerHTML = `
//     <div class="nav-container">
//       <a href="index.html" class="logo">Kidgar</a>
//       <div class="menu-links">
//         <a href="index.html">Home</a>
//         <a href="about.html">About</a>
//         <a href="contact.html">Contact</a>
//       </div>
//     </div>
//   `;

//   document.body.prepend(nav);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const nav = document.createElement("nav");

//     nav.innerHTML = `
//     <div class="nav-container">
//       <a href="index.html" class="logo">
//         <img src="images/kidgarWordart.jpeg" alt="Kidgar Logo">
//       </a>
//       <div class="menu-links">
//         <a href="index.html">Home</a>
//         <a href="about.html">About</a>
//         <a href="contact.html">Contact</a>
//       </div>
//     </div>
//   `;

//     document.body.prepend(nav);
// });

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.createElement("nav");

    // Logo section (10%)
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");

    const logoImg = document.createElement("img");
    logoImg.src = "images/kidgarWordart.jpeg";
    logoImg.alt = "Kidgar Logo";

    logoDiv.appendChild(logoImg);

    // Menu section (90%)
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const links = [
        { name: "Home", href: "index.html" },
        { name: "About", href: "about.html" },
        { name: "Contact", href: "contact.html" },
    ];

    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.name;
        menuDiv.appendChild(a);
    });

    nav.appendChild(logoDiv);
    nav.appendChild(menuDiv);

    document.body.prepend(nav);
});



