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

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.createElement("nav");

    nav.innerHTML = `
    <div class="nav-container">
      <a href="index.html" class="logo">
        <img src="images/kidgarWordart.jpeg" alt="Kidgar Logo">
      </a>
      <div class="menu-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  `;

    document.body.prepend(nav);
});


