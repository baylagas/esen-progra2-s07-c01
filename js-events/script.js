function showAlert(){
    alert("this is the alert message")
    document.getElementById("message1").innerText = "this will be the new text"
}

function showOut(){
    alert("i went out of the button")
}

function prepareMyBtn(){
    var random = 0
    var num1 = 4
    var num2 = 7

    /*
    document.getElementById("myBtn").addEventListener("click", function(){
        random = Math.floor(Math.random() * 10)
        displayOnConsole( random )
        sendToMessageBox( random )
    })
    */
    document.getElementById("myBtn").addEventListener("click", createRandomNumber)


    document.getElementById("myBtn").addEventListener("mouseout", function(){
        var doubleRandom = random*2
        sendToMessageBox( doubleRandom )
    })

    //document.getElementById("myBtn").removeEventListener("click", createRandomNumber);
}


function createRandomNumber(){
    random = Math.floor(Math.random() * 20)
    displayOnConsole( random )
    sendToMessageBox( random )
}


function sendToMessageBox(randomNumber){
    document.getElementById("message2").innerText = randomNumber
}


function displayOnConsole(number){
    console.log(number)
}

prepareMyBtn()