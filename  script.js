let redCount = 0;
let blueCount = 0;
let yellowcount=0;

document.getElementById("redBtn").addEventListener("click", (1) => {
  redCount++;
  document.getElementById("message").innerText =
    "赤ボタンを " + redCount + " 回押しました";
});

document.getElementById("blueBtn").addEventListener("click", (1) => {
  blueCount++;
  document.getElementById("message").innerText =
    "青ボタンを " + blueCount + " 回押しました";
});
document.getElementById("yellowbtn").addEventListener("click", (1) => {
  blueCount++;
  document.getElementById("message").innerText =
    "青ボタンを " + blueCount + " 回押しました";
});