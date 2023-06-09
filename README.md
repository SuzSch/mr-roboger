Describe: mrRobo()

Test 1: "Should return a list of values from 0 to the inputNumber"
Code:
mrRobo(inputNumber);
inputNumber = 13;
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

Test 2: "Should take any number from 0 to inputNumber that contains a 3 and replace it with a "Won't you be my neighbor!"
Code:
mrRobo(inputNumber);
inputNumber = 13;
Expected Output: [0, 2, "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, 10, 11, 12, "Won't you be my neighbor!"]

Test 3: "If a number from 0 to inputNumber does not contain a 3, but contains a 2 then repalce it with "Boop!"
Code:
mrRobo(inputNumber);
inputNumber = 13;
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, 10, 11, "Boop", "Won't you be my neighbor!"]

Test 4: "If a number from 0 to inputNumber does not contain a 3 or a 2 but does contain a 1 then repalce it with "Beep!"
Code:
mrRobo(inputNumber);
inputNumber = 13;
Expected Output: [0, "Beep!" "Boop!", "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor!"]

