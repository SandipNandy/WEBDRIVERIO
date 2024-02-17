describe('WebdriverIO Static Drop Down Selection', () => {
    it('Static Drop Down Selection', async () => {

        //https://rahulshettyacademy.com/loginpagePractise/
        console.log('static')
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        
        //await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await $("#username").setValue("rahulshettyacademy");
        
        await $('#password').setValue("learning");
        var radioButton = await $$('.customradio');
        await radioButton[1].$("input[id='usertype']").click();
        const popup = $(".modal-content")
        await popup.waitForDisplayed();
        (await $("button[id='cancelBtn']")).click();
        const Dropdown = await $("select.form-control");
        await Dropdown.selectByAttribute('value', 'consult');
        await browser.pause('4000');

    });

    it('Dynamic Drop Down Selection', async () => {
        console.log('dynamic');
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await (await $("#autocomplete")).setValue('ind');
        await browser.pause(1000);
        var options = await $$("li[class='ui-menu-item']");
        //  async function getCountryNames(elem){
            
        //     if(await options[elem].getText()==='India'){
        //  console.log('op ',await options[elem].getText());
        //  return options[elem];}
        //  }
         for(let i=0;i<options.length;i++){if(await options[i].getText()==='India')options[i].click();}
        //As mentioned in the comments, Array.prototype.filter is synchronous and therefore does not support Promises.
         //var op= options.filter(elem => elem.getText().then((u)=>{if(u==='India'){return 1}}));

         //var op= options.filter(elem1=>getCountryNames(elem1));
         //op[0].click();
        await browser.pause(9000);



    });

});
