function judge() {
    const targetMinecraft = document.getElementsByClassName("minecraft");
    const targetNeet = document.getElementsByClassName("neet");

    const startDay = new Date("2022-12-14T08:00:00");
    const today = new Date()

    const ms = today.getTime() - startDay.getTime();
    const days = Math.floor(ms / (1000*60*60*24));

    const minecraftStyleDisplay = (days % 2 == 0) ? "" : "none";
    const neetStyleDisplay = (days % 2 == 0) ? "none" : "";
    Array.prototype.forEach.call(targetMinecraft, e => e.style.display = minecraftStyleDisplay);
    Array.prototype.forEach.call(targetNeet, e => e.style.display = neetStyleDisplay);
}