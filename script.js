console.log("Welcome to my tic tac toe");
let turn = "X";
isgameover = false;

//function for change turn
const changeturn = () => {
  return turn === "X" ? "0" : "X";
};

//function for check win
const checkwin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  wins.forEach((e) => {
    if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&boxtext[e[1]].innerText === boxtext[e[2]].innerText &&boxtext[e[0]].innerText !== ""){
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won ";
      // document.getElementsByClassName("info")[0].innerText =boxtext[e[0]].innerText + " won ";
      // document.getElementsByTagName("b")[0].innerText = boxtext[e[0]].innerText + " won " ;
      isgameover = true;
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "250px";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeturn();
      checkwin();
      if(!isgameover){
      document.getElementsByClassName("info")[0]. innerText = "Turn for" + turn;
      // document.getElementsByTagName("b")[0].innerText = turn;
      }
    }
  });
});
reset.addEventListener("click",()=>{
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach(element=>{
    element.innerText = "";
  })
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0]. innerText = "Turn for" + turn;
})
