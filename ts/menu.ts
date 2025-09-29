document.addEventListener("DOMContentLoaded", () => {
	// Create nav element
	const nav: HTMLElement = document.createElement("nav");

	// Logo section (10%)
	const logoLink: HTMLAnchorElement = document.createElement("a");
	logoLink.classList.add("logo");
	logoLink.href = "index.html";

	const logoImg: HTMLImageElement = document.createElement("img");
	logoImg.src = "images/kidgarWordart.jpeg";
	logoImg.alt = "Kidgar Logo";

	logoLink.appendChild(logoImg);

	// Menu section (90%)
	const menuDiv: HTMLDivElement = document.createElement("div");
	menuDiv.classList.add("menu");

	interface MenuLink {
		name: string;
		href: string;
	}

	const links: MenuLink[] = [
		{ name: "Home", href: "index.html" },
		{ name: "About", href: "about.html" },
		{ name: "Breweries", href: "breweries.html" },
		{ name: "Contact", href: "contact.html" },
	];

	links.forEach((link: MenuLink) => {
		const a: HTMLAnchorElement = document.createElement("a");
		a.href = link.href;
		a.textContent = link.name;
		menuDiv.appendChild(a);
	});

	nav.appendChild(logoLink);
	nav.appendChild(menuDiv);

	document.body.prepend(nav);
});
