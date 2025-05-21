//HW1
//GMAIL VALID CHECKER
const input = document.querySelector('.form_gmail input');
const button = document.querySelector('.form_gmail button');

button.addEventListener('click', () => {
    const email = input.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

if (regex.test(email)) {
    alert('✅ Gmail is valid!');
} else {
    alert('❌ Invalid Gmail.');
}
});


// //BLOCK MOVEMENT
// const child = document.querySelector('.child_block');
// const parent = document.querySelector('.parent_block');

// let pos = 0;
// const maxPos = parent.clientWidth - child.clientWidth;

// function move() {
//     if (pos < maxPos) {
//       pos += 2; // можно изменить скорость
//       child.style.left = pos + 'px';
//       requestAnimationFrame(move); 
//     }
// }

// window.onload = move;








// HW2
//BLOCK MOVEMENT UPGRATED
  const child = document.querySelector('.child_block');
  const parent = document.querySelector('.parent_block');

  const step = 2;
  const maxRight = parent.clientWidth - child.clientWidth;
  const maxBottom = parent.clientHeight - child.clientHeight;

  let posX = 0;
  let posY = 0;
  let direction = 'right';

  function move() {
    if (direction === 'right') {
      if (posX < maxRight) {
        posX += step;
      } else {
        direction = 'down';
      }
    } 
    else if (direction === 'down') {
      if (posY < maxBottom) {
        posY += step;
      } else {
        direction = 'left';
      }
    } 
    else if (direction === 'left') {
      if (posX > 0) {
        posX -= step;
      } else {
        direction = 'up';
      }
    } 
    else if (direction === 'up') {
      if (posY > 0) {
        posY -= step;
      } else {
        direction = 'stop'; 
      }
    }

    child.style.left = posX + 'px';
    child.style.top = posY + 'px';

    if (direction !== 'stop') {
      requestAnimationFrame(move);
    }
  }

  window.onload = move;


// STOPWATCH
let counter = 0;
let intervalId = null;


const counterEl = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");


function updateDisplay() {
  counterEl.textContent = counter;
}


startBtn.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      counter++;
      updateDisplay();
    }, 1000);
  }
});


stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});


resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  counter = 0;
  updateDisplay();
});



