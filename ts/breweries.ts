document.getElementById("search")?.addEventListener("click", async () => {
	const city = (document.getElementById("city") as HTMLInputElement).value;
	const state = (document.getElementById("state") as HTMLInputElement).value;
	const resultsDiv = document.getElementById("results") as HTMLDivElement;
	resultsDiv.innerHTML = "Loading...";

	try {
		// Fetch breweries from backend
		const res = await fetch(`/api/breweries?city=${city}&state=${state}`);
		const breweries = await res.json();

		if (!breweries.length) {
			resultsDiv.innerHTML = "No breweries found.";
			return;
		}

		resultsDiv.innerHTML = "";
		breweries.forEach((brewery: any) => {
			const div = document.createElement("div");
			div.classList.add("brewery");
			div.innerHTML = `
        <h3>${brewery.name}</h3>
        <p>${brewery.street || ""}, ${brewery.city}, ${brewery.state}</p>
        <p>Type: ${brewery.brewery_type}</p>
      `;
			resultsDiv.appendChild(div);
		});
	} catch (err) {
		resultsDiv.innerHTML = "Error fetching breweries.";
	}
});