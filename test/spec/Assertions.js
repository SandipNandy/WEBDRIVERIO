describe('Assertions in Web DriverIO', () => {  
    it('First Drop Down', async () => {  
       // https://rahulshettyacademy.com/loginpagePractise/
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        
        //console.log(await browser.getTitle());
        let title=await browser.getTitle()
        
        expect(title).toHaveTextContaining("LoginPage Practise | Rahul Shetty Academy")
        
        await $("#username").setValue("rahulshettyacademy");
        
        await $('#password').setValue("fffff");
        
        console.log(await browser.getTitle());
        await (await $("input[id='signInBtn']")).click();
        await browser.waitUntil(
            async () => await $('#signInBtn').getAttribute('value') === 'Sign In',
            
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
            
        );
        console.log(await $(".alert-danger").getText())

        

        // var radioButton = await $$('.customradio');
        // await radioButton[1].$("input[id='usertype']").click();
        // const popup = $(".modal-content")
        // await popup.waitForDisplayed();
        // (await $("button[id='cancelBtn']")).click();
        // const Dropdown = await $("select.form-control");
        // await Dropdown.selectByAttribute('value', 'consult');
        // await browser.pause('4000');


    });
})
