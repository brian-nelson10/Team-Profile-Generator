const Employee = require('../lib/Employee.js');


test('creates employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
  
});

test('sets name', () => {
    const name = "Penny";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});