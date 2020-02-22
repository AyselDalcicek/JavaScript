var car = {
    Make: "BMW",
    Model: "X5",
    Year: 2019,
    price: 5000
};

console.log(car);

console.log(car.Make); // BMW
console.log(car["Make"]); // BMW

console.log(car.Model); // X5
console.log(car["Model"]);  // X5

console.log("=============================");
for(each in car){
    console.log(each);
}

console.log("=============================");
for(each in car){
    console.log(car[each]);
}

console.log("=============================");
for(each in car){
    console.log(each+": "+car[each]);
}