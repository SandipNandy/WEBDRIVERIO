describe('Functional Testin in WebdriverIO',function(){
    it('Scrolling And MouseOver',async function (){

        //https://only-testing-blog.blogspot.com/
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.pause(3000);
        await (await $("#mousehover")).scrollIntoView();
        await browser.pause(3000);
        await (await $("#mousehover")).moveTo();
        await browser.pause(3000);
        await (await $("=Top")).click();
        await browser.pause(3000);



    })
})