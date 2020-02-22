var MyCars = {
    BMW:
    {
        Year: 2019,
        Model: "X5",
        MadeIn: "Germany"
    },
    Toyota: {
        Year: 2018,
        Model: "Corolla",
        MadeIn: "Japan"
    },
    Mercedes:{
        Year: 2016,
        Model: "C class",
        MadeIn: "China"
    }
   
}

 console.log(MyCars);   // { BMW: { Year: 2019, Model: 'X5', MadeIn: 'Germany' } }
 console.log(MyCars.BMW.Model); // X5
 console.log(MyCars["BMW"]);  // { Year: 2019, Model: 'X5', MadeIn: 'Germany' }
 console.log(MyCars["BMW"]["Model"]);  // X5

 console.log("========================================");
 for(eachCar in MyCars){
     console.log(MyCars[eachCar]);
 }
 console.log("========================================");
 for(eachCar in MyCars){
    console.log(eachCar);
}
console.log("----------------------------------------");
for(eachCar in MyCars){
    console.log(MyCars);
}

console.log("-----Year Of Toyota------");
console.log(MyCars.Toyota.Year);  // 2018
console.log(MyCars["Toyota"]["Year"]); // 2018

console.log("-----Copy Objects------");
// copy objects
var oldCars = JSON.parse(JSON.stringify(MyCars));
console.log(oldCars);