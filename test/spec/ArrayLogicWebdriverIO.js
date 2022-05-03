



describe('My Login application', () => {
    it('should login with valid credentials', async() => {
       await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
       await $("#username").setValue("rahulshettyacademy");
        await $('#password').setValue("learning");
        var radioButton = await $$('.customradio');
       await radioButton[1].$("input[id='usertype']").click();
       await browser.pause(4000);

    })
});