import express from "express";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

let id;

const ENDPOINT_1 = `pokemon/${id}`;
const ENDPOINT_2 = `/pokemon-species/${id}`;

const app = express();
const port = 3000;



app.use(express.static("public"));



app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}`);
});