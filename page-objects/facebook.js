const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");
  module.exports = {

    urls: 'https://www.facebook.com',

    elements: {
        username: By.name('email'), //'//*[@id="email"]',
        password: By.name('pass'),   //'//*[@id="pass"]'
        login: '//*[@data-testid="royal_login_button"]',  
        //LoginHeader: '//*[@id="u_0_2_/z"]',                    
    },
    
   
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.facebook.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    clickButton: async function(button1) {        
        var selector = page.facebook.elements[button1];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.facebook.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    // inputUserName: async function(objectKey) {
    //     var selector = page.facebook.elements[objectKey];
    //     await driver.sleep(2000);
    //     return driver.findElement(By.xpath(selector).sendKeys());
    // },

    // inputPassword: async function(objectKey) {
    //     var selector = page.facebook.elements[objectKey];
    //     await driver.sleep(2000);
    //     return driver.findElement(By.xpath(selector).sendKeys());
    // },

    //And I enter the inputs for login

inputElement: async function(name,val) {
        var selector = page.facebook.elements[name]; 
        await driver.sleep(3000);
        return driver.findElement(selector).sendKeys(val);
        },

};
