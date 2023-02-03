const { assert } = require("chai");
const { By } = require("selenium-webdriver");

  module.exports = {

    urls: 'https://www.samsclub.com',

elements: {
    signin: '//*[@id="flyout-wrapper"]/div/div[2]/button/span/span',     
    signinheader: '//*[@id="main"]/div/div[1]/div/div/div[1]/form',  
    username: By.name('email'), ////*[@id="email"]
    password: By.name('current-password'),  ////*[@id="password"]
    signinbutton: '//*[@id="main"]/div/div[1]/div/div/div[1]/form/button',  
    welcomemessage: '//*[@id="Search"]',
    errormessage: '//*[@id="main"]/div/div[1]/div[1]',
},


clickElement: async function(objectKey) {
    var selector = page.samsclub.elements[objectKey];
    await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).click();
},

clickButton: async function(button1) {
    var selector = page.samsclub.elements[button1];
    await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).click();
},

elementExists: async function(objectKey) {
    var selector = page.samsclub.elements[objectKey];
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector));
},

inputElement: async function(name,val) {
    var selector = page.samsclub.elements[name]; 
    await driver.sleep(3000);
    return driver.findElement(selector).sendKeys(val);
},

  }