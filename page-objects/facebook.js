const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");
  module.exports = {

    url: 'https://www.facebook.com/',

    elements: {
      
        Login: '//*[@id="u_0_5_Te"]',
        LoginHeader: '//*[@id="u_0_2_zi"]/div[5]',
        username: By.name ('//*[@id="email"]'),
        password: By.name ('//*[@id="pass"]')
    
    },
    
   
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.facebook.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.facebook.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
};
