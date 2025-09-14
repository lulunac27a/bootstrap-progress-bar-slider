const slider = document.getElementById("slider"); //slider element
const progress = document.getElementById("progress"); //progress text
const progressBar = document.getElementById("progress-bar"); //progress bar element
slider.addEventListener("change", (e) => {
    //when slider value is changed
    updateProgress(e.target.value); //update progress
});
slider.addEventListener("input", (e) => {
    //when slider value is changed
    updateProgress(e.target.value); //update progress
});

function updateProgress(value) {
    //function to update progress
    progress.textContent = value; //set progress text
    progressBar.style.width = `${value}%`; //set progress bar width
    progressBar.setAttribute("aria-valuenow", value); //set aria value
}
