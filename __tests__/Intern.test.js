const Intern = require('../lib/Intern.js');

test ('creates intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test('sets job', () => {
    const testValue = "Intern";
    const intern = new Intern("Penny", 10, "info@info.com");
    expect(intern.getRole()).toBe(testValue);
});