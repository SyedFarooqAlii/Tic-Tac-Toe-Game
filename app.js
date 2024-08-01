let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let msgcon = document.querySelector(".message-container");
let msgs = document.querySelector("#message");
let turnO = true;
let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () => {
  turnO = true;
  enabledbtn();
  msgcon.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const disabledbtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledbtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  if (winner) {
    msgs.innerText = `Congratulation The Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledbtn()
  }
};
const checkwinner = () => {
  for (let pattern of winpatterns) {
    let positionvalue0 = boxes[pattern[0]].innerText;
    let positionvalue1 = boxes[pattern[1]].innerText;
    let positionvalue2 = boxes[pattern[2]].innerText;

    if (positionvalue0 != "" && positionvalue1 != "" && positionvalue2 != "") {
      if (
        positionvalue0 === positionvalue1 &&
        positionvalue1 === positionvalue2
      ) {
        console.log("The Winner Is", positionvalue0);
      showwinner(positionvalue0)
      }
    }
  }
};
resetbutton.addEventListener("click",resetgame)
newgamebtn.addEventListener("click",resetgame)

// const resetgame = () => {
//   turnO = true;
//   enabledbtn();
//   msgcon.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     console.log("box was clicked");
//     if (turnO) {
//       boxes.innnerText = "O";
//       turnO = false;
//     } else {
//       boxes.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     checkwinnner();
//   });
// });
// const disabledbtn = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enabledbtn = () => {
//   for (let box of boxes) {
//     box.disabled = false;
// // box.innerText=""
// }
// };
// const showwinner = (winner) => {
//   if (winner) {
//     msgs.innerText=`Congratulations, The winner is ${winner}`;
//     msgcon.classList.remove("hide");
//     disabledbtn();
//   }
// };
// const checkwinnner = () => {
//   for (let pattern of winpatterns) {
//     let positionvalue0 = boxes[pattern[0]].innerText;

//     let positionvalue1 = boxes[pattern[1]].innerText;

//     let positionvalue2 = boxes[pattern[2]].innerText;
//     if (positionvalue0 != "" && positionvalue1 != "" && positionvalue2 != "") {
//       if (
//         positionvalue0 === positionvalue1 &&
//         positionvalue1 === positionvalue2
//       ) {
//         // console.log("Congratulation winner is",positionvalue0);

//         console.log("Winner", positionvalue0);

//         showwinner(positionvalue0);
//       }
//     }
//   }
// };
// newgamebtn.addEventListener("click", resetgame);
// resetbutton.addEventListener("click", resetgame);
