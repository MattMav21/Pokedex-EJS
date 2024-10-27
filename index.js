import express from "express";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";
const app = express();

app.use(express.static("public"));  