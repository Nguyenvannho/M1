let outputScreen = document.getElementById("output-screen");


// for output
function display(num) {
    outputScreen.value += num;
}

// for operator

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        alert("Invalid")
    }

}

// for clear and dellete
function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}