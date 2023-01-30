module.exports = function () {

  this.Given('I am on the facebook website', function () {
    return helpers.loadPage(page.facebook.url);
  });

  this.When('I click on Login link', function (objectKey) {
    return page.facebook.clickElement(objectKey);
  });

  this.When('I enter username as "([^"]*)"$/', function (objKey1) {   
    return page.facebook.inputUserName(objKey1);
  });
  
  this.When('I enter password as "([^"]*)"$/', function (objKey1) {
    return page.facebook.inputPassword(objKey1);
  });
    
  this.Then('I should see LoginHeader', function (objectKey) {
    return page.facebook.elementExists(objectKey);

  });

  

};