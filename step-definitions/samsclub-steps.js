const helpers = require("../runtime/helpers");

module.exports = function () {
    //I am on the samsclub website
    this.Given('I am on the samsclub website', function() {
        return helpers.loadPage(page.samsclub.urls);
    });

    //I click on "signin" link
    this.When(/^I click on "([^"]*)" link$/, function (objectKey) {        
        return page.samsclub.clickElement(objectKey);
    });
      
    //I should get "signinheader"
    this.Then(/^I should get "([^"]*)"$/, function(objectKey) {
        return page.samsclub.elementExists(objectKey);
    });

    //I enter the signin inputs
    this.When('I enter the signin inputs', async function (table) {        
        const inputs = table.rows()
        for(i = 0;i<inputs.length; i++) {
            page.samsclub.inputElement(inputs[i][0], inputs[i][1])
        }
        await driver.sleep(3000);
        return;
    });

    //I click "signinbutton"
    this.When(/^I click "([^"]*)"$/, function(button1) {
        return page.samsclub.clickButton(button1);
    });

    //I should receive "welcomemessage"
    this.Then(/^I should receive "([^"]*)"$/, function(objectKey) {
        return page.samsclub.elementExists(objectKey);

    });

}