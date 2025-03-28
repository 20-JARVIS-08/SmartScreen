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


function toggleDiv() {
    const div = document.getElementById("myDiv");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}