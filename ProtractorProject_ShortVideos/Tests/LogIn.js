
describe("VyTracl Log In" , function( ) {

    it( "Login to VyTrack" , function( ) {

        browser.get("https://qa3.vytrack.com/")
        browser.sleep(3000);

        var username = element(by.css("#prependedInput"));
        var password = element(by.css("#prependedInput2"));
        var loginButton = element(by.xpath("//button[text()='Log in']"));

        username.sendKeys("storemanager85");
        browser.sleep(5000);

        password.sendKeys("UserUser123");
        browser.sleep(5000);

        loginButton.click();
        browser.sleep(5000);

    });
});