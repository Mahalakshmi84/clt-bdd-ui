// module.exports = function () {

//     //I am on the bankofamerica website
//     this.Given('I am on the bankofamerica website', function () {
//         return helpers.loadPage(page.boa.url);
//     });

//     // I enter the inputs for login
//     this.When('I enter the inputs for login', async function (table) {
        
//             const inputs = table.rows();
//             for(i = 0;i<inputs.length; i++) {
//                 page.boa.inputElement(inputs[i][0], inputs[i][1])
//             }
//             await driver.sleep(3000);
//             return;
//         });


//           //I enter the inputs
// //     this.When('I enter the inputs', async function (table) {        
// //         const inputs = table.rows();
// //         for(i = 0;i<inputs.length; i++) {
// //             page.samsclub.inputElement(inputs[i][0], inputs[i][1])
// //         }
// //         await driver.sleep(5000);
// //         return;
// //     });


//         //I click on "loginbutton"
//   this.When(/^I click on "([^"]*)"$/, function (button1) {
//     return page.bankofamerica.clickButton(button1);
//   });
// }