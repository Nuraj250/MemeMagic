document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("loading").style.display = "block"; // Show loading spinner

    chrome.storage.local.get(["memeText", "memeImage"], async (data) => {
        if (data.memeText && data.memeImage) {
            await new Promise(r => setTimeout(r, 1000)); // Simulate AI processing delay
            generateMeme(data.memeText, data.memeImage, "memeCanvas");
        }
        document.getElementById("loading").style.display = "none"; // Hide spinner
    });

    document.getElementById("downloadBtn").addEventListener("click", () => {
        const canvas = document.getElementById("memeCanvas");
        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get(["previousMemes"], (data) => {
        const container = document.getElementById("previousMemesContainer");
        if (data.previousMemes) {
            data.previousMemes.forEach(({ text, meme }) => {
                const img = document.createElement("img");
                img.src = `images/${meme}`;
                img.alt = text;
                img.width = 100;
                img.height = 100;
                container.appendChild(img);
            });
        }
    });
});


