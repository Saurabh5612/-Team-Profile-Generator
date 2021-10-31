const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

Test("can set office number",()=>{
    const testValue = '121';
    const employee  = new Manager('meet','85','meet@meet.com');
    expect(employee.officeNumer).toBe(testValue);
});
Test("getrole() should return Manager",()=>{
    const testValue = "Manager";
    const employee  = new Manager('meet','85','meet@meet.com');
    expect(employee.getrole()). toBe(testValue);
});