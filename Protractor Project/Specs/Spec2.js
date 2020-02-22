var GoogleJson = require("../Resources/GoogleJson.json")

describe("Test Group 2", () => {
    
    it("Go to Google Website", () => {
       
     //   browser.get("http://www.google.com");
        browser.sleep(3000);
        browser.get(GoogleJson.URL);

    });



});