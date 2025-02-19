import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as toxicity from '@tensorflow-models/toxicity';

let model, toxicityModel;

// Predefined meme templates categorized by emotion
const memeTemplates = {
    "positive": ["success-kid.jpg", "feel-good.jpg"],
    "negative": ["angry-cat.jpg", "confused-mrkrabs.jpg"],
    "sarcasm": ["mocking-spongebob.jpg", "patrick-mocking.jpg"],
    "motivational": ["one-does-not-simply.jpg", "you-can-do-it.jpg"]
};

// Load AI Models
export async function loadAIModels() {
    model = await use.load();
    toxicityModel = await toxicity.load(0.8);
    console.log("TensorFlow.js Models Loaded!");
}

// Analyze text and suggest memes
export async function suggestMeme(selectedText) {
    if (!model || !toxicityModel) {
        await loadAIModels();
    }

    const embeddings = await model.embed([selectedText]);
    const toxicPredictions = await toxicityModel.classify([selectedText]);

    let sentiment = "neutral"; // Default sentiment
    let toxicityFlag = false;

    // Check if the text is toxic
    toxicPredictions.forEach(prediction => {
        if (prediction.results[0].match) {
            toxicityFlag = true;
        }
    });

    // Simple Sentiment Analysis based on embedding index (Experimental)
    const sentimentScores = {
        "positive": embeddings.arraySync()[0][5],
        "negative": embeddings.arraySync()[0][10],
        "sarcasm": embeddings.arraySync()[0][15],
        "motivational": embeddings.arraySync()[0][20]
    };

    sentiment = Object.keys(sentimentScores).reduce((a, b) =>
        sentimentScores[a] > sentimentScores[b] ? a : b
    );

    // If text is toxic, default to sarcasm or block meme generation
    if (toxicityFlag) {
        sentiment = "sarcasm";
    }

    // Pick a random meme from the suggested category
    const memes = memeTemplates[sentiment];
    return memes[Math.floor(Math.random() * memes.length)];
}
