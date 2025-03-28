let video = document.getElementById("video");
let captureBtn = document.getElementById("capture");
let flipBtn = document.getElementById("flip");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let useFrontCamera = true;

function startCamera() {
    let constraints = {
        video: { facingMode: useFrontCamera ? "user" : "environment" }
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error("Camera access is not possible!", error);
        });
}

captureBtn.addEventListener("click", () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    let imageUrl = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = imageUrl;
    a.download = "captured-image.png";
    a.click();
});

flipBtn.addEventListener("click", () => {
    useFrontCamera = !useFrontCamera;
    startCamera();
});

startCamera();