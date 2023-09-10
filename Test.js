it('Launch URLS', function () {
    browser.url('https://the-internet.herokuapp.com/login')
   // browser.url('https://the-internet.herokuapp.com/login')
});
xit('refresh', function () {  
    browser.refresh(); 
})
xit('u', function () {  
    //var t =
    browser.getTitle().then(function (tt) {
        console.log('Title : ', tt);
        assert.equal(tt, 'The Internet');
    });
});
