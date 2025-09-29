var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get("/api/breweries", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, state } = req.query;
    const url = `https://api.openbrewerydb.org/v1/breweries?by_state=${state}&by_city=${city}&per_page=50`;
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch breweries" });
    }
}));
// Google Places API (requires key)
app.get("/api/google-places", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lng, radius = 5000 } = req.query;
    const apiKey = process.env.GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=bar&keyword=brewery&key=${apiKey}`;
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch Google Places" });
    }
}));
app.listen(PORT, () => console.log(`API server running at http://localhost:${PORT}`));
