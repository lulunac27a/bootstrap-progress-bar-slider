const slider = document.getElementById("slider");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
slider.addEventListener("change", (e) => {
    updateProgress(e.target.value);
});
function updateProgress(value) {
    progress.textContent = value;
    progressBar.style.width = `${value}%`;
    progressBar.setAttribute("aria-valuenow", value);
}
