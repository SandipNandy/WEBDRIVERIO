exports.config = {
  
  capabilities: [{
    
    'browserName': 'chrome',
    //'browserName': 'chrome'
    
  }],
  // Framework to use. Jasmine is recommended.
  
  framework: 'jasmine',
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['example_spec.js'],
  
  specs: [ 
    './test/specs/Main.js'
],
  jasmineOpts: {
    defaultTimeoutInterval: 30000
    
  }
};
