// const { assert } = require("chai");
// const { By } = require("selenium-webdriver");
// const helpers = require("../runtime/helpers");
//   module.exports = {

//     url: 'https://www.bankofamerica.com',

//     elements: {
//         username: By.name('email'), //*[@id="onlineId1"]
//         password: By.name('pass'),   //*[@id="passcode1"]
//         login: '//*[@id="signIn"]', 
   
//     },

//     inputUserName: async function(objectKey) {
//         var selector = page.bankofamerica.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector).sendKeys());
//     },

//     inputPassword: async function(objectKey) {
//         var selector = page.bankofamerica.elements[objectKey];
//         await driver.sleep(2000);
//         return driver.findElement(By.xpath(selector).sendKeys());
//     },

    

//     inputElement: async function(name,val) {
//         var selector = page.bankofamerica.elements[name]; 
//         await driver.sleep(3000);
//         return driver.findElement(selector).sendKeys(val);
//     },

//     clickButton: async function(button1) {        
//         var selector = page.bankofamerica.elements[button1];
//         await driver.sleep(5000);
//         return driver.findElement(By.xpath(selector)).click();
//     },


//   }

    

    

    