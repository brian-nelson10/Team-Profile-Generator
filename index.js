//add const
//add initialize function
//add html function for header and body
//add add team member function
//add fs.writefile(filelocation, html, function(err))
//add add team member html (cards) insert body html
//add appendFile(filelocation, data, function(err))
//add last div and body html closing tags

//add member(); startHtml(); addHtml(); .then(function); finsihHtml();

const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const fs = require('fs');

function runGen() {
    addTeamMember();
    renderHtml();
}

function addTeamMember() {
    inquirer
        .prompt([
        {
            type: 'text',
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
            type: 'email',
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
            type: 'checkbox',
            name: 'role',
            message: 'Please select Team Members Role',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
   
runGen()
//.then(inputData => {
    console.log(inputData);
//    return generateHtml(inputData);
//});