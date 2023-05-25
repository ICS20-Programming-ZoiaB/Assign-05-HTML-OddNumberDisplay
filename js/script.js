// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function numbersSent() {
  // initializing the numbers and message variable to an empty string
  let numbers = "";
  let message = "";
  let sum = 0;

  // getting the user values for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  // initializing the counter variable to the minNumber
  let counter = minNumber;

  if ((isNaN(minNumber) || (isNaN(maxNumber)))) {
    message = "Please enter valid numbers.";
  }
  
  // if statement checks if minNumber > maxNumber (there is an error)
  else if (minNumber > maxNumber) {
    message = "Ensure that the starting number is less than or equal to the stopping number.";
  }

  // else, complete while loop to create list of odd numbers between min and max
  else {
    // while loop that specifies the range
    while (counter <= maxNumber) {
      // if statement checks for odd numbers, provided that the condition in the while statement is true. It uses an operator that determines if there is a remainder when the number is divided by 2 (method taken from https://www.tutorialspoint.com/How-to-determine-if-a-number-is-odd-or-even-in-JavaScript)
      if (counter % 2 == 1) {
        numbers += counter + "<br>";
        sum += counter;
      }
      counter++;
    }
    message = "Here are all the odd numbers between your selected numbers:<br><br>" + numbers;
    message += "<br>Sum of all odd numbers: " + sum;
  }

  // displaying the results (the range of odd numbers) back to the user
  document.getElementById("results").innerHTML = message;
}

