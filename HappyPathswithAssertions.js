describe('Assertions in Web DriverIO', () => {
    
    it('First Drop down', async () => {
        //https://rahulshettyacademy.com/loginpagePractise/
        
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        
        await browser.maximizeWindow();
        
        await $("[id='username']").setValue('rahulshettyacademy');
        
        await $("[id='password']").setValue("learning");
        
        await (await $("[id='signInBtn']")).click();
        
        await browser.pause(2000);
        
        await (await $("[class='list-group-item']")).waitForExist({ timeout: 30000 });
        
        expect(browser).toHaveUrlContaining("shop");
        
        expect(browser).toHaveTitle('ProtoCommerce');
    });
});
