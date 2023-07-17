describe('Radio Buttons Drop Down : ', () => {
    it('DEMO PAGE.', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        
        await $("[id='username']").setValue('rahulshettyacademy');
        await $("[id='password']").setValue("learning");
        
        const radioButton = await $$(".radiotextsty");
        let UserDropDown = radioButton[1];
        
        await (await UserDropDown.$("span")).click();
        const Modal = await $(".modal-body");
        
        await Modal.waitForDisplayed();
        await (await $("#cancelBtn")).click();
        console.log(await (await $$("customradio")[0].$("span")).isSelected());
        await (await UserDropDown.$("span")).click();
        await Modal.waitForDisplayed();
        await (await $("#okayBtn")).click();
        await (await $$(".customradio")[0].$("span")).click();
        await expect(Modal).not.toBeDisplayed();
        const dropDown = await $("select.form-control");
        await dropDown.selectByAttribute('value', 'teach');
        await dropDown.selectByVisibleText("Consultant");
        await dropDown.selectByIndex(1);
        await dropDown.getValue();
        //await browser.pause(4000);
        //await (await $("[id='signInBtn']")).click();
    });
});
