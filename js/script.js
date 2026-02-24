const weddingDate = new Date("May 7, 2026 18:59:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const d = weddingDate - now;

    const days = Math.floor(d / (1000*60*60*24));
    const hours = Math.floor((d % (1000*60*60*24)) / (1000*60*60));

    document.getElementById("timer").innerHTML =
        days + " Days " + hours + " Hours";
}, 1000);
