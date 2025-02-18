# **MemeMagic 🎭 - AI-Powered Meme Generator Browser Extension**

![MemeMagic Logo](icons/icon128.png)

### **🔥 Instantly generate memes from selected text using AI & dynamic meme templates!**
MemeMagic is a **browser extension** that allows users to create memes with a simple right-click. Leveraging **AI-powered sentiment analysis** and the **Imgflip meme API**, it automatically suggests the most relevant meme template for your selected text. Customize your memes with **drag-and-drop text positioning** and share them instantly on **Twitter & Reddit**! 🚀

---

## **🚀 Features**
✅ **Right-Click Meme Generation** – Select text, right-click, and create a meme instantly.  
✅ **AI-Powered Meme Suggestions** – Uses **TensorFlow.js & Universal Sentence Encoder** for sentiment analysis.  
✅ **Live Meme Templates** – Fetches **trending meme templates** via **Imgflip API**.  
✅ **Drag-and-Drop Text Editing** – Move the text anywhere on the meme canvas!  
✅ **Download & Share Memes** – Save memes as images or share them on **Twitter & Reddit** with one click.  
✅ **Modern Tailwind UI** – Clean and simple interface.  

---

## **📂 Folder Structure**
```
MemeMagic/
├── icons/                   # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
├── scripts/                 # JavaScript logic
│   ├── content.js           # Injected script (Currently not used)
│   ├── background.js        # Handles context menu & AI processing
│   ├── popup.js             # UI logic for the extension popup
│   ├── memeAI.js            # AI-powered meme suggestion logic
│   ├── memeGenerator.js     # Meme rendering with drag-and-drop text
├── styles/                  # Tailwind-based CSS (if needed)
├── popup/                   # Popup UI
│   ├── popup.html           # Meme customization & sharing UI
├── manifest.json            # Extension configuration
├── README.md                # Project documentation
```

---

## **🛠️ Installation**
### **For Developers (Manual Install)**
1️⃣ **Clone this repository**  
```bash
git clone https://github.com/yourusername/MemeMagic.git
cd MemeMagic
```
2️⃣ **Start using MemeMagic!** 🎉  
- **Select text on any webpage**  
- **Right-click → "Generate Meme from Text"**  
- **Customize and share your meme!**  

## **🖥️ How It Works**
### **1️⃣ AI-Powered Meme Selection**
- Uses **TensorFlow.js Universal Sentence Encoder** to analyze text sentiment.
- Classifies text as **positive, negative, sarcastic, or motivational**.
- Filters toxic content using **TensorFlow.js Toxicity Model**.

### **2️⃣ Meme Template Fetching**
- **Imgflip API** is used to dynamically fetch the latest meme templates.
- Random templates are selected based on the detected sentiment.

### **3️⃣ Meme Customization & Sharing**
- **Drag-and-drop text** anywhere on the meme canvas.
- **Download memes** as `.png` images.
- **Share directly on Twitter & Reddit** with one click.

---

## **📜 API Usage**
### **Imgflip Meme API**
MemeMagic uses [Imgflip's meme API](https://api.imgflip.com/get_memes) to fetch trending meme templates.

Sample API response:
```json
{
  "success": true,
  "data": {
    "memes": [
      {
        "id": "181913649",
        "name": "Drakeposting",
        "url": "https://i.imgflip.com/30b1gx.jpg",
        "width": 1200,
        "height": 1200
      }
    ]
  }
}
```

---

## **🔧 Technologies Used**
- **Chrome Extensions API** – Context menus, local storage, popup UI
- **TensorFlow.js** – AI-powered meme selection (Sentiment & Toxicity Analysis)
- **Imgflip API** – Fetching trending meme templates
- **HTML5 Canvas API** – Meme rendering & drag-and-drop text positioning
- **Tailwind CSS** – Modern UI styling

---

## **📸 Screenshots**
### **Popup UI**
![Popup UI](https://via.placeholder.com/600x400?text=MemeMagic+Popup)

### **Right-Click Menu**
![Right Click](https://via.placeholder.com/600x400?text=Right+Click+Meme+Generation)

---

## **🚀 Future Enhancements**
🔹 **More Meme Customization** – Font styles, colors, multiple text areas  
🔹 **GIF Support** – Generate memes using animated templates  
🔹 **Community Meme Sharing** – Submit memes to a global meme feed  

---

## **🤝 Contributing**
Want to improve **MemeMagic**? Feel free to contribute! 🎉  

1️⃣ **Fork this repo**  
2️⃣ **Create a new branch**  
3️⃣ **Commit your changes**  
4️⃣ **Submit a Pull Request (PR)**  

---

## **📜 License**
This project is licensed under the **MIT License**.  

---

🔥 **Enjoy making memes effortlessly with MemeMagic!** 🎭
