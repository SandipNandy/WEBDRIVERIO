export default class Page {
    //https://the-internet.herokuapp.com/${path}
    
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

}
