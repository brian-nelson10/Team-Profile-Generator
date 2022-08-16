//officeNumber
//getRole override to manager

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email, officenumber);
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officenumber;
    }
}


module.exports = Manager;