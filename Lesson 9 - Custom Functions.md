
# Lesson 9 - Custom Functions

Functions organize reusable code that performs a single action. We have used `rect()` many times. Behind the scenes, many lines of code are needed to draw a rectangle, but because they are written once as a function, we can draw as many rectangles as we like without repeating all of that code.

> **AP CSP:** The AP exam calls functions **procedures**. Breaking a program into procedures is an example of **procedural abstraction**: you can use `rect()` without knowing how it works inside.

## Setting up a Function

We've seen functions before (`mousePressed()`, etc.) and even created our own for buttons. Some reminders:

- They go **outside** of all other functions (make sure the previous function has closed with `}`).
- They are descriptively named in camelCase.
- The body can include any code you like.

Below is a function, written after `draw()` has closed, that draws a stick person:

```javascript
function draw() {
  background(220);
}

function stickPerson() {
  circle(100, 100, 50);       // head
  line(100, 125, 100, 200);   // body
  line(100, 150, 70, 170);    // left arm
  line(100, 150, 130, 170);   // right arm
  line(100, 200, 80, 250);    // left leg
  line(100, 200, 120, 250);   // right leg
}
```

If you run this, nothing appears. Writing a function doesn't run it. We must **call** the function.

## Calling a Function

Think about how you draw a rectangle. You call the function by name, and give it any required information inside the brackets (for `rect()`: x, y, width and height).

```javascript
function draw() {
  background(220);
  stickPerson();
}
```

Now the stick person appears. But this isn't a great function yet: it always draws the exact same person in the exact same spot. A function becomes useful when it can **produce different results when given different information.**

## Adding Parameters

We can make a function accept **parameters** by naming them inside the brackets (like creating variables). Then those values can be used inside the function.

Below, the function receives one parameter called `headX`. Every shape is now placed relative to the head:

```javascript
function stickPerson(headX) {
  circle(headX, 100, 50);              // head
  line(headX, 125, headX, 200);        // body
  line(headX, 150, headX - 30, 170);   // left arm
  line(headX, 150, headX + 30, 170);   // right arm
  line(headX, 200, headX - 20, 250);   // left leg
  line(headX, 200, headX + 20, 250);   // right leg
}
```

Now each call can place a new stick person wherever we like:

```javascript
stickPerson(100);
stickPerson(250);
stickPerson(mouseX);
```

The values we send in (`100`, `250`, `mouseX`) are called **arguments**. The names that receive them inside the function (`headX`) are **parameters**.

## More Parameters

You can add as many parameters as you like, separated by commas. The arguments are matched to the parameters **in order**.

Any concept we've learned (if statements, loops etc.) can go inside a function. Here we add a y position, a head size, and an if/else that colours the head depending on where the person is:

```javascript
function stickPerson(headX, headY, headSize) {
  if (headX < width / 2) {
    fill(0, 0, 255);
  }
  else {
    fill(255, 0, 0);
  }
  circle(headX, headY, headSize);
  line(headX, headY + headSize / 2, headX, headY + 100);
  // ...
}

// call it with three arguments, in the same order
stickPerson(100, 100, 50);
stickPerson(400, 200, 80);
```

## Local Variables

If you create a variable inside a function, it only exists inside that function. This applies to parameters as well. In the example above, `headX` does not exist outside of `stickPerson()`.

## Best Use of Functions

The real power of functions is the fact that they are **reusable** and can be used to get different results. With the `stickPerson()` function, we eventually were able to produce different sized stick people anywhere we want.  Having a function perform just one task (like you may have done in your previous programming assignment is fine for *organization*, but it's not using functions to their full capabilities.

This is a concept that will be **very important** for your AP Create Task and Final Exam.