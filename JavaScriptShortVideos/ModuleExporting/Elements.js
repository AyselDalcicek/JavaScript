var elements = function(){
    this.username="username element"; // object instance
    this.password="password element";
    this.logInButton="Log In Button Element";
    // this keyword is must 
}

module.exports = new elements();  // constructor
