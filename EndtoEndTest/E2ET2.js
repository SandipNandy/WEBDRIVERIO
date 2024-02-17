describe('END TO END :-', () => {
    it('End to End Test Practice :- ', async() => {

        const products=['iphone X','Samsung Note 8','Blackberry']
        
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        
       await $("#username").setValue("rahulshettyacademy");
        
        await $('#password').setValue("learning");
        
        await (await $("#signInBtn")).click();
        
        //wait until checkout button is displayed
        const link=$("*=Checkout");
        await link.waitForExist();
        const cards= await $$("div[class='card h-100']");
        for(let i=0;i<await cards.length;i++){
            const card= await cards[i].$("div h4 a");
            if(products.includes(await card.getText())){
                await (await cards[i].$(".card-footer button")).click();
            }
        }
        
        await link.click();
        const productPrice= await $$("//tr/td[4]/strong");
       const sumOfProducts= await productPrice.map((productPrice)=>parseInt(productPrice.getText().split(".")[1].trim())).reduce((acc,price)=>acc+price,0);
       console.log("sumOfProducts : ",sumOfProducts);
       const TotalValue= await (await $("h3 strong")).getText();
       const totalIntValue=parseInt(TotalValue.split(".")[1].trim());
       await expect(sumOfProducts).toBe.equal(totalIntValue)
       await (await $(".btn-success")).click();
       await (await $("#country")).setValue("ind");
       await (await $(".lds-ellipis")).waitForExist({reverse:true});
       await (await $("=India")).click();
       await (await $("input[type='submit']")).click();
       await expect($(".alert-success")).toHaveTextContaining('Success');
    });
})

