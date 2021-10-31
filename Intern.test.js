
const intern = require("../lib/Intern")

Test("can set school constructor",()=>{
    const testValue = "FCC";
    const intern =  "new Intern"('thomas','25','thomas@gmail.com.com','FCC');
    expect(intern.school).toBe(testValue)
});

Test("getrole() should return  \"Intern\"", () =>{
    const testValue  = "Intern";
    const intern = new intenrn('thomas','25','thomas@gmail.com','FCC');
    expect(intern.getrole()).toBe(testValue);
});

Test("can get school getschool()",()=>{
    const testValue = "FCC";
    const intern = new intern('thomas','25','thomas@gmail.com','FCC');
    expect(intern.getschool()).toBe(testValue);
});
