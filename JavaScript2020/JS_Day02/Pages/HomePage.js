
var elements = function(){
    this.Home = "Home element";   // this keyword --> refers to obj instance
    this.Menus = "Menue element"; 
    this.title = "title";
};

module.exports = new elements();