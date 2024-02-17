import express, { request } from "express";
import mongoose from "mongoose";

import Musica from './models/musica.js'

const app= express();

app.Musica(express.json());

const Musica = [];

app.get("/musica", (request, response) => {
    return response.json(musica);
});

app.post("/musica", async (request, response) => {
    const musica = request.body

    const newMusica = await Musica.create(musica)

    return response.jason (newMusica);
});

mongoose
.connect("mongodb+srv://devronaldooliveira:<batatinha123@>@cluster0.brmpcif.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Banco de dados conectado"))
.catch(() => console.log("não funcionou"))

app.listen(3000);