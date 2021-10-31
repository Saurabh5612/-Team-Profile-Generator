
const Engineer = require('../lib/Engineer.js')

Test('creates an github account',()=>{
    const engineer = new engineer ('saurabh','1012','pate&patel@gmail.com','saurabhgit')
    const testValue = "githubuser";
    expect(engineer.github).toBe('testvalue');
});
Test("getrole() should return Engineer", ()=>{
    const testValue = "Engineer";
    const engineer = new engineer('saurabh','1012','pate&patel@gmail.com','saurabhgit');
    expect(engineer.getroll()).toBe('testvalue');

});
Test("can get gihub username  getgithubuser()",()=>{
    const testValue = "githubuser";
    const engineer = new engineer('saurabh','1012','pate&patel@gmail.com','saurabhgit');
    expect(engineer.getgithub()).toBe('testvalue');

});

    
  