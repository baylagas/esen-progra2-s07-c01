function add(number1, number2, elementId){
    var result = number1 + number2
    var paragraph
    switch (elementId) {
        case 1:
            paragraph = "message1"
            break;
        case 2:
            paragraph = "message2"
            break;
        case 3:
            paragraph = "message3"
            break;
        default:
            break;
    }
    document.getElementById(paragraph).innerText = ("result: " + (number1 + number2))
}

add(3,7,2) //10