// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function numbersSent() {
  
  // initializing the numbers and message variables to an empty string
  let numbers = "";
  let message = "";

  // Getting the user values for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  // if: if user does not enter input or if invalid input is entered, tell user to enter valid numbers.
  if ((isNaN(minNumber) || (isNaN(maxNumber)))) {
    message = "Please enter valid numbers.";
  }
  
  //else if: otherwise, if minimum (starting) number is greater than maximum (stopping) number, tell user to ensure that the starting number is less than or equal to the stopping number
  else if (minNumber > maxNumber) {
    message = "Ensure that the starting number is less than or equal to the stopping number.";
  }

  //else, complete a loop to display list of odd numbers
  else {
    
    //Determines which radio button is checked to determine whether list of odd numbers should be reversed or not
    const REVERSED = document.getElementById("reversed");
    if (REVERSED.checked) {
      let counter = maxNumber;
      //Do while loop to display list of odd numbers in reverse
      do {
        // if statement checks for odd numbers. It uses an operator that determines if there is a remainder when the number is divided by 2 (method taken from https://www.tutorialspoint.com/How-to-determine-if-a-number-is-odd-or-even-in-JavaScript)
        if (counter % 2 !== 0) {
          numbers += counter + "<br>";
        }
        counter = counter - 1;
      } while (counter >= minNumber);
      message = "Here are all the odd numbers between your selected numbers:<br><br>" + numbers;
    }
      
  // else, complete while loop to create list of odd numbers between minimum (starting) number and maximum (stopping) number in regular order
    else {
      let counter = minNumber;
      while (counter <= maxNumber) {
        // if statement checks for odd numbers. It uses an operator that determines if there is a remainder when the number is divided by 2 (method taken from https://www.tutorialspoint.com/How-to-determine-if-a-number-is-odd-or-even-in-JavaScript)
        if (counter % 2 !== 0) {
          numbers += counter + "<br>";
        }
        counter++;
      }
      
      //Set message variable equal to the list of odd numbers
      message = "Here are all the odd numbers between your selected numbers:<br><br>" + numbers;
    }
  }

  // displaying the results (the list of odd numbers) back to the user
  document.getElementById("results").innerHTML = message;
}

