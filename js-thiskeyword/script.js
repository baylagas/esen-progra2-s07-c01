//objeto de javascript
var person = {

    firstName: "balbino",
    lastName : "aylagas",
    id       : 2233,
    fullName : function() {
      return this.firstName + " " + this.lastName + " " + this.id;
    }
}

console.log(person.fullName())

var x = this
console.log(x)