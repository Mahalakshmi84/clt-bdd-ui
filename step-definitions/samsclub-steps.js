module.exports = function () {

    this.Given('I am on the samsclub portal', function () {
        return helpers.loadPage(page.samsclub.url);
    });

    this.When(/^I Click on Login link "([^"]*)"$/, function (objectKey) {
        return page.samsclub.clickElement(objectKey);
    });

    this.When(/^I enter username "([^"]*)"$/ , function(objKey1) {
        return page.samsclub.inputUserName(objKey1);
    });

    this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
        return page.samsclub.inputPassword(objKey1);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.samsclub.elementExists(objectKey);
    });
}
