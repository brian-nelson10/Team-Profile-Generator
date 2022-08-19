const inquirer = require("inquirer");

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const fs = require('fs');

const teamArray = [];

function callApp() {
    renderHtml();
//    teamName();
    addTeamMember();
}

// const teamName = () => {
//     console.log(`
//     ====================
//     Start a Team Profile
//     ====================
//     `);


//     return inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'team',
//                 message: 'Enter your Team Profile Name',
//                 validate: teamInput => {
//                     if (teamInput) {
//                         return true;
//                     } else {
//                         console.log('Enter Team Profile Name!!');
//                         return false;
//                     }
//                 }
//             }
//         ]) 
//         .then(projectData => {
//             let {name} = projectData;
//             if (name === name) {
//                 console.log(name)
//             } else {
//                 return false;
//             }
//             teamProfileArr.push(projectData);

          

//         })
//     };
   
const addTeamMember = () => {
    console.log(`
    ====================
    Start a Team Profile
    ====================
    `);
    
    return inquirer
    .prompt([
    // {
    //     type: 'input',
    //     name: 'team',
    //     message: 'Enter your Team Profile Name',
    //     validate: teamInput => {
    //         if (teamInput) {
    //             return true;
    //         } else {
    //             console.log('Enter Team Profile Name!!');
    //             return false;
    //         }
    //     }
    // },
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
                addCardHtml(employee)
                .then(function() {
                    if (confirmAddMember) {
                        return addTeamMember(teamArray);
                    } else  {
                        finHtml();

                    }
                });
            });
        };

const renderHtml = () => {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <!--Import Google Icon Font-->
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <!-- Compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&display=swap');
            </style>
            <title>Team Profile</title>
        
        </head>
        
        <body>
            <header>
                <nav>
                    <div class="nav-wrapper amber">
                        <div class="brand-logo white-text" id="team"><i class="material-icons">cloud</i>Team Profile</div>
                        <div class= "row justify-content-center" id="team-Cards">
                        
                    </div>
                </nav>
            </header>
            <main>    
                <div class ="container">
        `;
        fs.writeFile('./dist/team-profile.html', html, function(err) {
            if (err) {
                console.log(err);
            }
        });
}

function addCardHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        const role = employee.getRole();
        let data = "";
        if (role === 'Manager') {
            const officeNumber = employee.getOfficeNumber();
            data = 
            `
    <div class="row">
   <div class="col s12 m6">
     <div class="card grey lighten-3">

       <div class="card-content ">
         <h3 class="card-title green-text">${name}</h3>
         <h4 class="amber-text"> <i class="material-icons">work</i> ${role}</h4>
       </div>

       <div class="card-action green darken-1">
        <p class="id white-text">ID: ${id}</p>
         <p class="email white-text">Email: <a href="mailto:${email}">${email}</a></p>
         <p class="officeNumber white-text">Office Number: ${officeNumber}</p>
   </div>
    `;
      } else if (role === "Engineer") {
            const git = employee.getGit();
            data = 
            `
    <div class="row">
   <div class="col s12 m6">
     <div class="card grey lighten-3">

       <div class="card-content">
         <h3 class="card-title green-text">${name}</h3>
         <h4 class="amber-text"><i class="material-icons">build</i>${role}</h4>
       </div>

       <div class="card-action green darken-1">
        <p class="id white-text">ID: ${id}</p>
         <p class="email white-text">Email: <a href="mailto:${email}">${email}</a></p>
         <p class="git white-text">GitHub Profile: <a href="https://github.com/${git}">${git}</a></p>
       </div>
     </div>
   </div>
   </div>
    `;
        } else {
            const school = employee.getSchool();
            data = 
            `
            <div class="row">
           <div class="col s12 m6">
             <div class="card grey lighten-3">
        
               <div class="card-content">
                 <h3 class="card-title green-text">${name}</h3>
                <h4 class="amber-text"><i class="material-icons">edit</i>${role}</h4>
               </div>
        
               <div class="card-action green darken-1">
                <p class="id white-text">ID: ${id}</p>
                 <p class="email white-text">Email: <a href="mailto:${email}">${email}</a></p>
                 <p class="school white-text">School Name: ${school}</p>
               </div>
             </div>
           </div>
           </div>
            `
        }
        console.log('Added Team Member!');
        fs.appendFile("./dist/team-profile.html", data, function(err) {
            if (err) {
                 reject(err);
            };
            return resolve({
                ok: true,
                message: 'HTML File created! Check it out in the dist folder!'
            });
        });
    });
}

const finHtml = () => {
    const html = `
    </div>
        </div>
    </main>

    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
</body>
<footer class="page-footer amber">
<div class="footer-copyright">
    <div class="container">
    
    <a class="grey-text text-lighten-4 right">© ${new Date().getFullYear()} Copyright Text</a>
</html>


    `;
    fs.appendFile("./dist/team-profile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Fin.");
}

callApp();



