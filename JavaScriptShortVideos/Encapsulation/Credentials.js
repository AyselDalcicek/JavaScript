
class Credentials{
    username = "cybertek";
    password = "cybertek123";

    get getUserName(){
        return this.username;
    }

    set setUserName(username){
        this.username=username;
    }

    get getPassWord(){
        return this.password;
    }

    set setPassWord(password){
        this.password=password;
    }
}

var obj = new Credentials();
console.log(obj.getUserName); //cybertek --> getter

obj.setUserName = "UserName123";  // setter
console.log(obj.getUserName); // UserName123  --> getter

console.log(obj.getPassWord);  // cybertek123

obj.setPassWord= "Password123";
console.log(obj.getPassWord);  // Password123