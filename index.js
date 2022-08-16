//add const
//add initialize function
//add html function for header and body
//add add team member function
//add fs.writefile(filelocation, html, function(err))
//add add team member html (cards) insert body html
//add appendFile(filelocation, data, function(err))
//add last div and body html closing tags

//add member(); startHtml(); addHtml(); .then(function); finsihHtml();
const {writeFile, copyFile} = require('./dist/generate-site.js');
const inquirer = require("inquirer");
const generateHtml = require('./utils/generateHtml.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const fs = require('fs');

// function runGen() {
//     teamName();
//     addTeamMember();
//     renderHtmlBase();
// }

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
        ])};
const addTeamMember = teamData => {
    console.log(`
    ==================
    Add a Team Member!
    ==================
    `);
    
      // If there is no 'team' array property, create one
      if (!teamData.team) {
        teamData.team = [];
      }
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
        }
    ])
    .then(function({name, id, email, role}) {
        let roleInput = "";
        if (role === "Manager") {
            roleInput = "Office Phone Number";
        } else if (role === "Engineer") {
            roleInput = "GitHub Username";
        } else {
            roleInput = "School Name";
        }

        inquirer
            .prompt([{
                name: 'roleInput',
                message: `Enter Team Members ${roleInput}`
            },
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Would you like to add more Team Members?',
                default: false            
            }])
            .then(profileData => {
                //teamData.team.push(profileData);
                if (profileData.addMember) {
                    return addTeamMember(teamData);
                } else {
                    return teamData;
                }
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
        });
    }
//    );
//}


//call to run app
teamName()
.then(addTeamMember)
.then(teamData => {
    console.log(teamData);
  //  return generateHtml(teamData);
})
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// // .then(writeFileResponse => {
// //     console.log(writeFileResponse);
// //     return copyFile();
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
.catch(err => {
    console.log(err);
});