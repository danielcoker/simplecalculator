// Define variables
var input = $("#input"), // Calculator Input
    clear = $("#clear"), // Clear button
    input_value=""; // Value in calculator input

// Function to clear input
function clear() {
    input.val("");
    input_value = "";
    operators = "";
}

// When clear button is pressed, clear input
clear.on('click', function() {
    input.val("");
    input_value = "";
    operators = "";
});

// Get the number of each number button pressed and
// display in calculator input
$('.number').on('click', function() {
    var number = $(this).attr('data-number');
    input_value += number;
    input.val(input_value);
});

// Get the value of each operator pressed and append the operator
// to the input value
$('.operator').on('click', function() {
    var operator = " " + $(this).attr('data-operator') + " ";
    input_value += operator;
    input.val(input_value);
});

// When form is submitted or equals operator is pressed, evaluate the input value
// and return the result
$("#calculator-form").on('submit', function() {
    if (input == "") {
        alert("Please input a values to calculate!");
    } else {
        var result = eval(input_value);
        input.val(result);
        input_value = "";
        operators = "";
    }
    return false;
});
