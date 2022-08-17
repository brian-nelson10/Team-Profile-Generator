
generateHTML = (teamArray) => {

const renderTeamHtml = renderHtmlBody(teamArray);
return renderTeamHtml;
}

const renderHtmlBody = function (teamArray) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

    <title>${teamArray} Profile</title>

</head>

<body>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="brand-logo" id="team"><i class="material-icons">cloud</i>${teamArray}</div>
                
            </div>
        </nav>
    </header>
    <main>    
        <div class ="container">
            <div class= "row justify-content-center" id="team-Cards">
                
            </div>
        </div>
    </main>

    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>


    `;
};


// //team card template

// <div class="row">
// <div class="col s12 m6">
//   <div class="card blue-grey darken-1">
//     <div class="card-content white-text">
//       <span class="card-title">Card Title</span>
//       <p>I am a very simple card. I am good at containing small bits of information.
//       I am convenient because I require little markup to use effectively.</p>
//     </div>
//     <div class="card-action">
//       <a href="#">This is a link</a>
//       <a href="#">This is a link</a>
//     </div>
//   </div>
// </div>
// </div>



module.exports = generateHTML;




