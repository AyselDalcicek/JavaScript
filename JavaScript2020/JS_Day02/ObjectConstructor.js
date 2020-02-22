var car1 = {
    brand : "Mercedes",
    mileage : 123450,
    year : 2020
};

var car2 = {
    brand : "Toyota",
    mileage : 150000,
    year : 2020
};

function car(brand, mileage, year){
    this.brand = brand;  // this refers to the object instances
    this.mileage = mileage;
    this.year = year;
};

var car3 = new car("Dodge", 130000, 2020);
console.log(car3);  // car { brand: 'Dodge', mileage: 130000, year: 2020 }


function Employee(Name, ID, SSN, Salary ){
    this.Name = Name;
    this.ID =  ID;
    this.SSN = SSN;
    this.Salary = Salary;
}

var employeeAysel = new Employee("Aysel", 7, "123-123-456", 85000);
var employeeSumeyya = new Employee("Sumeyya", 8, "000-987-123", 100000);
console.log(employeeAysel); // Employee { Name: 'Aysel', ID: 7, SSN: '123-123-456', Salary: 85000 }
console.log(employeeSumeyya); // Employee { Name: 'Sumeyya', ID: 8, SSN: '000-987-123', Salary: 100000 }
console.log(employeeSumeyya["Name"]);  // Sumeyya
console.log(employeeAysel["Name"]);  // Aysel
