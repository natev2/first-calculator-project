 // Write a function to display values
 function display(val){
    document.getElementById('result').value += val

    return val
}

// Write a function perform arithmetic operations
function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearScreen() {
    document.getElementById('result').value = ''
}

