// const helpers = require("../runtime/helpers");
// const { assert } = require("chai");



// module.exports = function () {
//     //I am on the samsclub website
//     this.Given('I am on the samsclub website', function() {
//         return helpers.loadPage(page.samsclub.urls);
//     });

//     //I click on "signin" link
//     this.When(/^I click on "([^"]*)" link$/, function (objectKey) {        
//         return page.samsclub.clickElement(objectKey);
//     });
      
//     //I should get "signinheader"
//     this.Then(/^I should get "([^"]*)"$/, function(objectKey) {
//         return page.samsclub.elementExists(objectKey);
//     });

//     //I enter the inputs
//     this.When('I enter the inputs', async function (table) {        
//         const inputs = table.rows();
//         for(i = 0;i<inputs.length; i++) {
//             page.samsclub.inputElement(inputs[i][0], inputs[i][1])
//         }
//         await driver.sleep(5000);
//         return;
//     });


//     // this.When(/^I enter the inputs$/, async function (table) {
//     //             const fields = table.rows();
//     //             console.log(fields);
//     //             for (i = 0; i < fields.length; i++) {
//     //                 console.log(page.costco.inputElement(fields[i][0], fields[i][1]));
//     //             };
//     //     await driver.sleep(5000);
//     //     return;
//     // }); 

//     //I click "signinbutton"
//     this.When(/^I click "([^"]*)"$/, function(button1) {
//         return page.samsclub.clickButton(button1);
//     });

//     // // I click "forgotpassword"
//     // this.Then(/^I click "([^"]*)"$/, function (objectKey) {        
//     //     return page.samsclub.clickElement(objectKey);
//     // });

//     // //I should recieve "errormessage"
//     // this.Then(/^I should recieve "([^"]*)"$/, function(objectKey) {
//     //     return page.samsclub.elementExists(objectKey);

//     // });

// }