/*
   Description: Lesson 9 - Custom Functions example
   Author: Mr. Kowalczewski
   Date of last edit: October 28, 2026
*/

function setup() {
  createCanvas(600, 600);
  strokeWeight(3);
}

function draw() {
  background(220);

  // ----- Calling a function -----
  // no parameters: always the same person, same spot
  stickPersonBasic();

  // // ----- Calling with arguments -----
  // // when the function is defined with parameters/arguments, you must provide them in order
  // stickPersonWithHead(100);
  // stickPersonWithHead(250);
  // stickPersonWithHead(mouseX);
  
  

  // stickPerson(250, 100, 50);
  // stickPerson(450, 250, 80);
  // stickPerson(150, 350, 30);

  // // follows the mouse
  // stickPerson(mouseX, mouseY, 40);

  // // ----- A loop calling a function -----
  // for (let x = 50; x < width; x += 100) {
  //   stickPerson(x, 480, 20);
  // }
}

// ----- A function with no parameters -----
function stickPersonBasic() {
  fill(255);
  circle(100, 100, 50);       // head
  line(100, 125, 100, 200);   // body
  line(100, 150, 70, 170);    // left arm
  line(100, 150, 130, 170);   // right arm
  line(100, 200, 80, 250);    // left leg
  line(100, 200, 120, 250);   // right leg
}

// ----- A function with one parameter -----
// function stickPersonWithHead(headX) {
//   circle(headX, 100, 50);              // head
//   line(headX, 125, headX, 200);        // body
//   line(headX, 150, headX - 30, 170);   // left arm
//   line(headX, 150, headX + 30, 170);   // right arm
//   line(headX, 200, headX - 20, 250);   // left leg
//   line(headX, 200, headX + 20, 250);   // right leg
// }

// ----- A function with parameters -----
// headX, headY and headSize only exist inside this function (local)
// function stickPerson(headX, headY, headSize) {
//   // if/else inside a function: colour depends on position
//   if (headX < width / 2) {
//     fill(0, 0, 255);
//   }
//   else {
//     fill(255, 0, 0);
//   }

//   // every shape is placed relative to the head
//   let neckY = headY + headSize / 2;
//   circle(headX, headY, headSize);              // head
//   line(headX, neckY, headX, neckY + 75);       // body
//   line(headX, neckY + 25, headX - 30, neckY + 45); // left arm
//   line(headX, neckY + 25, headX + 30, neckY + 45); // right arm
//   line(headX, neckY + 75, headX - 20, neckY + 125); // left leg
//   line(headX, neckY + 75, headX + 20, neckY + 125); // right leg
// }
