//const protractor=require('protractor');
//const driver1=browser;
const assert = require('assert');
import LoginPage from '../pageobject/Locators.page';
describe('First Test', function () {

    it('Main Scripts',async function () {
        await LoginPage.open();
        await LoginPage.Title().then(function (tt) {
             console.log('Title : ', tt);
             assert.equal(tt, 'The Internet');
         });
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');

    });

    


});
