class TestData{

   // let str = "Cybertek";   
   // var str = "Cybertek";
   // const str = "Cybertek";

   static str = "Cybertek"; // MUST be static
        username = "cybertek123";

}

    console.log(TestData.str); // Cybertek

    var name1 = TestData.str;
    console.log(name1);  // Cybertek

    // instance variables
    // console.log(TestData.username); //undefined -->because we can not call it through the class name(instance)
    var obj = new TestData(); 
     obj.username = "username123"  // re-assign  If I reassign, it will print -->username123
    console.log(obj.username);  // username123
        
    
    var obj2 = new TestData(); 
    console.log(obj2.username);  // cybertek123

    obj2.username= "Bera123";
    console.log(obj2.username);   // Bera123