import express from "express";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

let id;

const ENDPOINT_1 = `pokemon/${id}`; // For Sprites, Number, name, height, & weight
const ENDPOINT_2 = `/pokemon-species/${id}`; // For Species & Entry

const app = express();
const port = 3000;

app.use(express.static("public"));

const pokeData = {
    id: "",
    name: "",
    species: "",
    height: "",
    weight: "",
    sprite: "",
    entry: "",
};

/// ROUTES

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.get(`/${id}`, async (req, res) => {
    
})

///



app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}`);
});