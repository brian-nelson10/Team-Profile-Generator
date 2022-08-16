const Manager = require('../lib/Manager.js');

test ('creates manager object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test('sets job', () => {
    const testValue = "Manager";
    const manager = new Manager("Penny", 10, "info@info.com");
    expect(manager.getRole()).toBe(testValue);
});