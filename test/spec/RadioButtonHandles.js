describe('Radio Buttons Drop Down : ', () => {

    it('DEMO PAGE.', async () => {
        ////https://rahulshettyacademy.com/loginpagePractise/
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        await $("[id='username']").setValue('rahulshettyacademy');
        await $("[id='password']").setValue("learning");
        const radioButton= await $$(".radiotextsty");
        let UserDropDown=radioButton[1];
        await UserDropDown.$("span").click();
        await browser.pause(4000);
        //await (await $("[id='signInBtn']")).click();
            });
});
