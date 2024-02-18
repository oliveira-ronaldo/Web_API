import Musica from "../database/bd.js";
import mongoose from "mongoose";

async function getMusicas(request, response){
    try {
        const musicas = await Musica.find();
        return response.status(200).json(musicas);
    } catch (error) {
        return response.status(500).json({ error: "Erro interno do servidor ao obter músicas" });
    }
}

async function createMusicas(request, response){
    try {
        const musica = request.body;
        const newMusica = await Musica.create(musica);
        return response.status(201).json(newMusica);
    } catch (error) {
        return response.status(500).json({ error: "Erro interno do servidor ao criar músicas" });
    }
}

async function getUmaMusica(request, response){
    const id = request.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ error: "ID de música inválido" });
        }
        const musica = await Musica.findById(id);
        if (!musica) {
            return response.status(404).json({ error: "A música que você procura não foi encontrada" });
        }
        return response.status(200).json(musica);
    } catch (error) {
        return response.status(500).json({ error: "Erro interno do servidor ao obter música" });
    }
}

async function deleteMusicas(request, response){
    const id = request.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ error: "ID de música inválido" });
        }
        await Musica.findByIdAndDelete(id);
        return response.status(200).json({response: "Música excluída"});
    } catch (error) {
        return response.status(500).json({ error: "Erro interno do servidor ao excluir música" });
    }
}

async function atualizaMusicas(request, response) {
    const id = request.params.id;
    const updates = request.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ error: "ID de música inválido" });
        }
        const musica = await Musica.findByIdAndUpdate(id, updates, { new: true });
        if (!musica) {
            return response.status(404).json({ error: "A música que você procura não foi encontrada" });
        }
        return response.status(200).json(musica);
    } catch (error) {
        return response.status(500).json({ error: "Erro interno do servidor ao atualizar música" });
    }
}

export { getMusicas, createMusicas, getUmaMusica, deleteMusicas, atualizaMusicas };
