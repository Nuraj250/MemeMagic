import { suggestMeme } from "./memeAI.js";
import { fetchMemeTemplates } from "./memeAI.js";

chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
        id: "generateMeme",
        title: "Generate Meme from Text",
        contexts: ["selection"]
    });

    // Fetch meme templates once on install
    const memes = await fetchMemeTemplates();
    chrome.storage.local.set({ memeTemplates: memes });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "generateMeme") {
        const selectedText = info.selectionText;
        const suggestedMeme = await suggestMeme(selectedText);

        chrome.storage.local.get(["memeTemplates"], (data) => {
            const memes = data.memeTemplates || [];
            const randomMeme = memes.length > 0 ? memes[Math.floor(Math.random() * memes.length)].url : suggestedMeme;

            chrome.storage.local.set({ memeText: selectedText, memeImage: randomMeme });
            chrome.action.openPopup();
        });
    }
});
