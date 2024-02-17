import express from "express";
import mongoose from "mongoose";
import Musica from './models/Musica.js';

const app = express();
app.use(express.json());

app.get("/musica", async (request, response) => {
    try {
        const musicas = await Musica.find();
        return response.json(musicas);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

app.post("/musica", async (request, response) => {
    try {
        const musica = request.body;
        const newMusica = await Musica.create(musica);
        return response.json(newMusica);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

mongoose
    .connect("mongodb+srv://devronaldooliveira:batatinha123%@cluster0.brmpcif.mongodb.net/sua_basede_dados", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Banco de dados conectado"))
    .catch((error) => console.log("Erro ao conectar ao banco de dados:", error));

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
