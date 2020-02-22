
 exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['../Tests/LogIn.js'],
   


    // similar with @BeforeMethod of TestNG
    onPrepare: function(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(10000);

    }

}