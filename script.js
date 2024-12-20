console.log("welcome to my TicTacToe Game");
let audioTurn = new Audio("");
let gamever = new Audio("");
let music = new Audio("");
let turn = "X";
let isGameOver = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxText = getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 5],
    [2, 5, 8],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector('.info').innerText =
        boxText[e[0]].innerText + "Won";
      isGameOver = true;
      document
        .querySelector('.imgBox')
        .getElementsByTagName('img')[0].style.width = "200px";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener('click', (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName('info')[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

let reset = getElementsByClassName("reset").addEventListener('click', () => {
  let boxText = document.querySelectoraAll(".boxText");
  Array.from(boxText).forEach(element => {
    element.innerText = " ";
  });
  turn = "X";
  isGameOver = false;
  document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
});
