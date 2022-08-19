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

test('sets id', () => {
    const testValue = 10;
    const employee = new Employee("Penny", testValue);
    expect(employee.id).toBe(testValue);
});

test('sets email', () => {
    const testValue = "info@info.com";
    const employee = new Employee("Penny", 10, testValue)
    expect(employee.email).toBe(testValue);
});

test('sets job', () => {
    const testValue = "Employee";
    const employee = new Employee("Penny", 10, "info@info.com");
    expect(employee.getRole()).toBe(testValue);
});