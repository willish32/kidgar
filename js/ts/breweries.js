"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById("search")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Loading...";
    try {
        // Fetch breweries from backend
        const res = yield fetch(`/api/breweries?city=${city}&state=${state}`);
        const breweries = yield res.json();
        if (!breweries.length) {
            resultsDiv.innerHTML = "No breweries found.";
            return;
        }
        resultsDiv.innerHTML = "";
        breweries.forEach((brewery) => {
            const div = document.createElement("div");
            div.classList.add("brewery");
            div.innerHTML = `
        <h3>${brewery.name}</h3>
        <p>${brewery.street || ""}, ${brewery.city}, ${brewery.state}</p>
        <p>Type: ${brewery.brewery_type}</p>
      `;
            resultsDiv.appendChild(div);
        });
    }
    catch (err) {
        resultsDiv.innerHTML = "Error fetching breweries.";
    }
}));
