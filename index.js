//add const
//add initialize function
//add html function for header and body
//add add team member function
//add fs.writefile(filelocation, html, function(err))
//add add team member html (cards) insert body html
//add appendFile(filelocation, data, function(err))
//add last div and body html closing tags

//add member(); startHtml(); addHtml(); .then(function); finsihHtml();
const {writeFile, copyFile} = require('./src/page-template.js');
const inquirer = require("inquirer");
const generateHtml = require('./src/generateHtml.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const fs = require('fs');

const teamArray = [];



const teamName = () => {
    console.log(`
    ====================
    Start a Team Profile
    ====================
    `);
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'team',
                message: 'Enter your Team Profile Name',
                validate: teamInput => {
                    if (teamInput) {
                        return true;
                    } else {
                        console.log('Enter Team Profile Name!!');
                        return false;
                    }
                }
            }
        ]) 
    };
   
const addTeamMember = () => {
    console.log(`
    ==================
    Add a Team Member!
    ==================
    `);
    
      return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team members name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
              } else {
                console.log('Please enter team members name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID Number',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter ID Number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Team Members Email Address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter Team Members Email!');
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select Team Members Role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the Office Number',
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (!isNaN(nameInput)) {
                    return true;
                } else {
                    console.log('Please enter the Office Number!');
                }
            }
        },
        {
            type: 'input',
            name: 'git',
            message: 'Please enter Team Members GitHub Username',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter Team Members GitHub!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter Team Members School Name',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter Team Members School Name!');
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add any more Team Members?',
            default: false   
        }
               
        ])

        .then(teamData => {
            let {name, id, email, role, officeNumber, git, school, confirmAddMember} = teamData;
            let employee;

              if (role === "Manager") {
                employee = new Manager (name, id, email, officeNumber);
                console.log(employee);
            } else if (role === "Engineer") {
                employee = new Engineer (name, id, email, git);
                console.log(employee);
            } if (role === "Intern") {
                employee = new Intern (name, id, email, school);
                console.log(employee);
            }

                teamArray.push(employee);
                
                if (confirmAddMember) {
                    return addTeamMember(teamArray);
                } else {
                    return teamArray,
                    console.log(teamData);
                }
            })
        };

//call to run app
teamName()
.then(addTeamMember)
 .then(teamArray => {
     console.log(teamArray);
      return generateHtml(teamArray);
 })
 .then(pageHTML => {
     return writeFile(pageHTML);
 })
 .then(writeFileResponse => {
     console.log(writeFileResponse);
     return copyFile();
 })
 .then(copyFileResponse => {
     console.log(copyFileResponse);
   })
.catch(err => {
    console.log(err);
});

        

            // .then(function({roleInput}) {
            //     let newMember;
            //     if (role === "Manager") {
            //         newMember = new Manager(name, id, email, roleInput);
            //     } else if (role === "Engineer") {
            //         newMember = new Engineer(name,id,email,roleInput);
            //     } else {
            //         newMember = new Intern(name,id,email,roleInput);
            //     }
//             teamData.team.push(newMember);
//             renderHtml()

//             .then(function() {
// //                teamData.team.push(profileData);
//                 if (addMember === "YES") {
//                     return addTeamMember(teamData);
//                 } else {
// //                    return renderCloseHtml(),
//                     console.log('Html has been generated');
//                 }
//             });
//        });
//    }
//    );
//}

