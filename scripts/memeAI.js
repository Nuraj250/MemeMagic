import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as toxicity from '@tensorflow-models/toxicity';

let model, toxicityModel;

// Fetch Imgflip Meme Templates
export async function fetchMemeTemplates() {
    try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        return data.data.memes;
    } catch (error) {
        console.error("Error fetching meme templates:", error);
        return [];
    }
}

// Load AI Models
export async function loadAIModels() {
    model = await use.load();
    toxicityModel = await toxicity.load(0.8);
    console.log("AI Models Loaded!");
}

// Suggest Meme
export async function suggestMeme(selectedText) {
    if (!model || !toxicityModel) await loadAIModels();

    const embeddings = await model.embed([selectedText]);
    const toxicPredictions = await toxicityModel.classify([selectedText]);

    let sentiment = "neutral";
    let toxicityFlag = false;

    toxicPredictions.forEach(prediction => {
        if (prediction.results[0].match) toxicityFlag = true;
    });

    const sentimentScores = {
        "positive": embeddings.arraySync()[0][5],
        "negative": embeddings.arraySync()[0][10],
        "sarcasm": embeddings.arraySync()[0][15],
        "motivational": embeddings.arraySync()[0][20]
    };

    sentiment = Object.keys(sentimentScores).reduce((a, b) =>
        sentimentScores[a] > sentimentScores[b] ? a : b
    );

    if (toxicityFlag) sentiment = "sarcasm";

    return sentiment;
}
