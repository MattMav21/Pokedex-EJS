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
    
    try {
        let id = 150;
        let data1 = await axios.get(BASE_URL + `pokemon/${id}`);
        let data2 = await axios.get(BASE_URL + `/pokemon-species/${id}`);        
        
        data1 = data1.data;
        data2 = data2.data;

        pokeData.id = data1.id;
        pokeData.name = data1.name;
        pokeData.species = data2.genera[7].genus;
        pokeData.height = data1.height;
        pokeData.weight = data1.weight;
        pokeData.sprite = data1.sprites.front_default;
        pokeData.entry = data2.flavor_text_entries[0].flavor_text;

        res.render("index.ejs", {pokeData: pokeData});
    } catch (error) {
        console.error("error");
        res.render("index.ejs");
    }


    res.render("index.ejs");
});

app.get(`/${id}`, async (req, res) => {
    // console.log("HITS");
    // let id = id;

    // let data1 = await axios.get(BASE_URL + ENDPOINT_1);
    // let data2 = await axios.get(BASE_URL + ENDPOINT_2);

    // console.log("DATA 1", data1);
    // console.log("DATA 2", data2);
    
    res.render("index.ejs");
})

///



app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}`);
});