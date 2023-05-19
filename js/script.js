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

  // getting the user values for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  // initializing the counter variable to the minNumber
  let counter = minNumber;

  if ((isNaN(minNumber) || (isNaN(maxNumber)))) {
    message = "Please enter valid numbers.";
  }

  // if statement checks if either number is negative
  else if (minNumber < 0 || maxNumber < 0) {
    message = "Enter positive integers for both the minimum and maximum.";
  }
  
  // if statement checks if minNumber > maxNumber (there is an error)
  else if (minNumber > maxNumber) {
    message = "Ensure that the minimum is less than or equal to the maximum.";
  }

  // else, complete while loop to create list of odd numbers between min and max
  else {
    // while loop that specifies the range
    while (counter >= minNumber && counter <= maxNumber) {
      // if statement checks for odd numbers, provided that the condition in the while statement is true. It uses the remainder operand.
      if (counter % 2 == 1) {
        numbers += counter + "<br>";
      }
      counter++;
    }
    message = "Here are all the odd numbers between your selected numbers:<br><br>" + numbers;
  }

  // displaying the results (the range of odd numbers) back to the user
  document.getElementById("results").innerHTML = message;
}