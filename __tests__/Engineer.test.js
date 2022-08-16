const Engineer = require('../lib/Engineer.js');

test ('creates engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test('sets job', () => {
    const testValue = "Engineer";
    const engineer = new Engineer("Penny", 10, "info@info.com");
    expect(engineer.getRole()).toBe(testValue);
});