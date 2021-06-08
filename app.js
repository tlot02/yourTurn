const dadButton = document.getElementById("dadButton");
const momButton = document.getElementById("momButton");
const background = document.getElementById("body");
let counter = 0;

function changeBackground() {
  if (counter === 0) {
    background.style.backgroundColor = "";
  } else if (counter > 0) {
    background.style.backgroundColor = "lightblue";
  } else if (counter < 0) {
    background.style.backgroundColor = "lightpink";
  }
}

dadButton.onclick = function () {
  console.log("you clicked the dad button");
  counter++;
  console.log(counter);
  changeBackground();
};

momButton.onclick = () => {
  console.log("you clicked the mom button");
  counter--;
  console.log(counter);
  changeBackground();
};
