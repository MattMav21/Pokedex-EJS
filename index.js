import express from "express";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

let id;

const ENDPOINT_1 = `pokemon/${id}`; // For Sprites, Number, name, height, & weight
const ENDPOINT_2 = `/pokemon-species/${id}`; // For Species & Entry

const app = express();
const port = 3000;

app.use(express.static("public"));

let menuDataList = [];

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

    if (menuDataList.length === 0) {
        try {
            for (let i = 1; i <= 151; i++) {
                let data = await axios.get(BASE_URL + `pokemon/${i}`);
                data = data.data;
        
                let menuData = {
                    id: data.id,
                    name: data.name,
                }
        
                menuDataList.push(menuData);
            }
        } catch (error) {
            console.error(error);
            res.render("index.ejs");
        }
    }


    res.render("index.ejs", {menuDataList: menuDataList});
});

app.get("/:id", async (req, res) => {

    const id = req.params.id;

    console.log(id);

    console.log("id route hits");

    try {
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

        res.render("id.ejs", {pokeData: pokeData});
    } catch (error) {
        console.error("error");
        res.render("index.ejs");
    }


    res.render("id.ejs");
})

///



app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}`);
});