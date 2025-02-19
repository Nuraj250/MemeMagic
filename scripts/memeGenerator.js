export function generateMeme(text, memeImage, canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = memeImage;
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        let startX = canvas.width / 2;
        let startY = 50;

        ctx.font = "30px Impact";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.textAlign = "center";
        ctx.lineWidth = 3;

        function drawText(x, y) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            ctx.strokeText(text, x, y);
            ctx.fillText(text, x, y);
        }

        drawText(startX, startY);

        canvas.addEventListener("mousedown", (event) => {
            const rect = canvas.getBoundingClientRect();
            let offsetX = event.clientX - rect.left;
            let offsetY = event.clientY - rect.top;

            function moveHandler(e) {
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
                drawText(offsetX, offsetY);
            }

            function upHandler() {
                canvas.removeEventListener("mousemove", moveHandler);
                canvas.removeEventListener("mouseup", upHandler);
            }

            canvas.addEventListener("mousemove", moveHandler);
            canvas.addEventListener("mouseup", upHandler);
        });
    };
}
