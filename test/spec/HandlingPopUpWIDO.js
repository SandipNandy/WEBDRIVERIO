describe('My Login application', () => {
    it('should login with valid credentials', async() => {
       await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
       await $("#username").setValue("rahulshettyacademy");
        await $('#password').setValue("learning");
        var radioButton = await $$('.customradio');
       await radioButton[1].$("input[id='usertype']").click();
       
      const popup=$(".modal-content")
       await popup.waitForDisplayed();
        (await $("button[id='cancelBtn']")).click();
       console.log(await (await radioButton[1].$("input[id='usertype']")).isSelected());
       await browser.pause(4000);

    })
});