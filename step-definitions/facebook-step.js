module.exports = function () {

  // Given I am on the Facebook portal
  this.Given('I am on the Facebook portal', function () {
    return helpers.loadPage(page.facebook.urls);
  });

  this.When('I enter the inputs for login', async function (table) {
    //console.log('Table Data: ' +JSON.stringify(table.rows()))
    const inputs = table.rows()
    for(i = 0;i<inputs.length; i++) {
        page.facebook.inputElement(inputs[i][0], inputs[i][1])
    }
    await driver.sleep(3000);
    return;
});

//I click on "login"
  this.When(/^I click on "([^"]*)"$/, function (button1) {
    return page.facebook.clickButton(button1);
  });


  //I should see "LoginHeader"  
  this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
    return page.facebook.elementExists(objectKey);

  });
  
};



