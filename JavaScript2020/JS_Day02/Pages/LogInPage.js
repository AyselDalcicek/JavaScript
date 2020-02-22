var elements = function(){
    this.username = "This is username element";   // this keyword --> refers to obj instance
    this.password = "This is password element"; 
    this.logInButton = "This is Log in button element";
};

module.exports = new elements();