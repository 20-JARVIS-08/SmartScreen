const images = {
    today: ["gallery_image/image1.jpg", "gallery_image/image2.jpg"],
    yesterday: ["gallery_image/image3.jpg", "gallery_image/image4.jpg", "gallery_image/image5.jpg"],
    march25: ["gallery_image/image6.jpg", "gallery_image/image7.jpg", "gallery_image/image8.jpg", "gallery_image/image9.jpg"]
};

function loadImages(section, elementId) {
    const gallery = document.getElementById(elementId);
    images[section].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            window.open(src, "_blank");
        });
        gallery.appendChild(img);
    });
}

function loadImages(section, elementId) {
    const gallery = document.getElementById(elementId);
    gallery.innerHTML = "";

    images[section].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.addEventListener("click", () => window.open(src, "_blank"));
        gallery.appendChild(img);
    });
}

loadImages("today", "today-gallery");

loadImages('today', 'today-gallery');
loadImages('yesterday', 'yesterday-gallery');
loadImages('march25', 'march25-gallery');


document.addEventListener("DOMContentLoaded", () => {
    let notificationBar = document.getElementById("notificationBar");
    let overlay = document.getElementById("overlay");

    document.addEventListener("mousedown", (event) => {
        if (event.clientY < 50) {
            notificationBar.classList.add("active");
            overlay.classList.add("active");
        }
    });

    document.addEventListener("click", (event) => {
        if (!notificationBar.contains(event.target) && !event.target.closest(".status-bar")) {
            notificationBar.classList.remove("active");
            overlay.classList.remove("active");
        }
    });
});

function updateTime() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById("currentTime").innerText = formattedTime + " " + formattedDate;
}
setInterval(updateTime, 1000);
updateTime();

function toggleActive(element) {
    element.classList.toggle("active");
}
