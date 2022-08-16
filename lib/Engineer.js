//add github
//getRole override engineer

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email, git);
    }
    getRole() {
        return "Engineer";
    }
    getGit() {
        return this.git;
    }
}


module.exports = Engineer;
