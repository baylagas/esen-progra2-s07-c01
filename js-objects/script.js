var car ={
    type:"fiat",
    model: "500",
    color: "white"
}

function showCar(){
    console.log(car)
    alert("show car..." + car)
    alert("modify to string..." + JSON.stringify(car))
    document.getElementById("message").innerHTML = JSON.stringify(car)
}

