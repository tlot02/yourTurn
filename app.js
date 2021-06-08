const dadButton = document.getElementById("dadButton");
const momButton = document.getElementById("momButton");
const background = document.getElementById("body");
const dadText = document.getElementById("dadButtonText");
const momText = document.getElementById("momButtonText");
let counter = 0; //used to determine who has changed more diapers
let momCount = 0; //used to count the total number of diapers
let dadCount = 0; //ditto

function changeBackground() {
  if (counter === 0) {
    background.style.backgroundColor = "";
  } else if (counter > 0) {
    background.style.backgroundColor = "lightblue";
  } else if (counter < 0) {
    background.style.backgroundColor = "lightpink";
  }
}

//updates the counters each time the dad button is clicked
dadButton.onclick = function () {
  counter++;
  dadCount++;
  dadText.innerHTML = `${dadCount}`;
  changeBackground();
};

//updates the counters each time the dad button is clicked
momButton.onclick = () => {
  counter--;
  momCount++;
  momText.innerHTML = `${momCount}`;
  changeBackground();
};
