import mongoose from "mongoose";

const musicaSchema = new mongoose.Schema({ 
    titulo: { 
        type: String,
        required: true
    },
    Artista: {
        type: String,
        required: true
    },
    AnoLancamento: {
        type: Number,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Musica", musicaSchema);
