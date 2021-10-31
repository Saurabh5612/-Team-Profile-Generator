const Employee = require("..scr/lib/Employee")

Test("can instantiate employee instance",() =>{
    const employee = new Employee('jay','007','j@j.com');
    

    //name,id ,email for test
    expect(employee.name).toBe('jay');
    expect(typeof employee.id).toBe('number');
    expect(employee.email).toBe(expect.any(String));
})