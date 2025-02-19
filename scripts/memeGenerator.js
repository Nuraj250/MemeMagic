export function generateMeme(text, memeImage, canvasId, fontSize = 30, textPosition = "top") {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = `images/${memeImage}`;
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        ctx.font = `${fontSize}px Impact`;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.textAlign = "center";
        ctx.lineWidth = 3;

        let lines = text.match(/.{1,30}(\s|$)/g);
        let startY = textPosition === "top" ? 50 : canvas.height - 100;

        lines.forEach((line, i) => {
            ctx.strokeText(line, canvas.width / 2, startY + (i * 40));
            ctx.fillText(line, canvas.width / 2, startY + (i * 40));
        });
    };
}
