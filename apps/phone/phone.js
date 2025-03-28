const display = document.getElementById("display");

function pressKey(value) {
    display.value += value;
}

function makeCall() {
    if (display.value !== "") {
        alert("calling " + display.value);
        window.location.href = "tel:" + display.value;
    } else {
        alert("Number not entered.");
    }
}



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
