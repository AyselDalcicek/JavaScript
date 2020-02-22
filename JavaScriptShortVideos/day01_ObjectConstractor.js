var car1 = {
    Make: "Toyoto",
    Model: "Corollla",
    Year: 2019
}

function car(Make, Model, Year){
    this.Make=Make;
    this.Model=Model;
    this.Year=Year;
}

var car2 = new car("BMW", "X5", 2020);
var car3 = new car("Lexus", "RX", 2020);

console.log(car2);  // car { Make: 'BMW', Model: 'X5', Year: 2020 }
console.log(car3);  // car { Make: 'Lexus', Model: 'RX', Year: 2020 }

console.log(car2.Make);  // BMW
console.log(car2["Make"]);   // BMW

console.log(car3.Make);  // Lexus
console.log(car3["Make"]);   // Lexus


function dog(Breed, Color, Gender, age){
    this.Breed=Breed;
    this.Color=Color;
    this.Gender=Gender;
    this.age=age;
};

var dog1 = new dog("Husky", "White", "Female", 7);
console.log(dog1); 

console.log(dog1.Breed);
console.log(dog1["Breed"]);