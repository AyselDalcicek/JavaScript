
class TestBase{
    // var username = "cybertek";
    static username = "cybertek";
    static password = "cybertek12345";

   // function LogIn() {
       static LogIn(){
           console.log("Loged In");
       }    
    }
    module.exports = TestBase;


    class Test1 extends TestBase{

    }


    /*
    console.log(TestBase.username);  // cybertek
    console.log(Test1.username);  //    cybertek

    TestBase.LogIn();  // Loged In
    Test1.LogIn();   // Loged In

   */

 


