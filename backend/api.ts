import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Open Brewery API (public)
app.get("/api/breweries", async (req, res) => {
	const { city, state } = req.query;
	const url = `https://api.openbrewerydb.org/v1/breweries?by_state=${state}&by_city=${city}&per_page=50`;

	try {
		const response = await fetch(url as string);
		const data = await response.json();
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch breweries" });
	}
});

// Google Places API (requires key)
app.get("/api/google-places", async (req, res) => {
	const { lat, lng, radius = 5000 } = req.query;
	const apiKey = process.env.GOOGLE_API_KEY;

	const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=bar&keyword=brewery&key=${apiKey}`;

	try {
		const response = await fetch(url as string);
		const data = await response.json();
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch Google Places" });
	}
});

app.listen(PORT, () =>
	console.log(`API server running at http://localhost:${PORT}`)
);