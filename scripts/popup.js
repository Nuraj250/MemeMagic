import { generateMeme } from "./memeGenerator.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loading").classList.remove("hidden");

    chrome.storage.local.get(["memeText", "memeImage"], (data) => {
        if (data.memeText && data.memeImage) {
            generateMeme(data.memeText, data.memeImage, "memeCanvas");
        }
        document.getElementById("loading").classList.add("hidden");
    });

    document.getElementById("downloadBtn").addEventListener("click", () => {
        const canvas = document.getElementById("memeCanvas");
        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });

    document.getElementById("shareTwitter").addEventListener("click", () => {
        const canvas = document.getElementById("memeCanvas");
        const dataURL = canvas.toDataURL("image/png");
        const tweetText = encodeURIComponent("Check out this meme I made with #MemeMagic!");
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${dataURL}`, "_blank");
    });

    document.getElementById("shareReddit").addEventListener("click", () => {
        const canvas = document.getElementById("memeCanvas");
        const dataURL = canvas.toDataURL("image/png");
        window.open(`https://www.reddit.com/submit?url=${dataURL}&title=Made+this+meme+with+MemeMagic!`, "_blank");
    });
});
