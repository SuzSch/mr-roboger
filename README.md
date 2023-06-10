![Mr. Rogers holding a remote control while knealing beside a robot.](img/mr-roboger.jpeg)

# [Mr. Roboger's Neighborhood]()

### By Suzanne Schuber

### Enter any number and recieve a count out from 0 to your number from Mr. Roboger.

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

Put any non-negative number in the the submit box and recieve a count from 0 to your number. Any number in the count that includes a 3 will come back with "Won't you be my neighbor?" If the number doesn't include a 3 but does have a 2 it will come back with "Boop!" And finally, any number that doesn't have a 3 or a 2 but does have a 1 will come back with "Beep!"

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level on the directory.
* Open index.html in your browser.
* Input a number in the submit box.
* Click on "See result" to get the count from Mr. Roboger.

## TDD

### Describe: mrRobo()

* Test 1: "Should return a list of values from 0 to the inputNumber"
  Code:
  mrRobo(inputNumber);
  inputNumber = 13;
  Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

* Test 2: "Should take any number from 0 to inputNumber that contains a 3 and     replace it with a "Won't you be my neighbor!"
Code:
mrRobo(inputNumber);
inputNumber = 13;
Expected Output: [0, 2, "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, 10, 11, 12, "Won't you be my neighbor!"]

* Test 3: "If a number from 0 to inputNumber does not contain a 3, but contains a 2 then repalce it with "Boop!"
Code:
mrRobo(inputNumber);
inputNumber = 13;
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, 10, 11, "Boop", "Won't you be my neighbor!"]

* Test 4: "If a number from 0 to inputNumber does not contain a 3 or a 2 but does contain a 1 then repalce it with "Beep!"
Code:
mrRobo(inputNumber);
inputNumber = 13;
Expected Output: [0, "Beep!" "Boop!", "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor!"]





## Known Bugs

* No know bugs.

## License

MIT License

Copyright (c) 2023 Suzanne Schuber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




