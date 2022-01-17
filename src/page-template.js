// Export function to generate HTML page
module.exports = templateData => {
    const {interns, engineers, ...manager } = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-dark bg-secondary text-center">
    <span class="navbar-brand mb-0 w-100 h1 text-white">My Team</span>
</nav>

<div class="container">
<div class="row">
<div class="col-10 d-flex justify-content-center">
${createManager(manager)}
${createEngineer(engineers)}
${createIntern(interns)}
 </div>
 </div>
 </div>
 </body>
 </html>
 `;
};

// Create Team Profile

const createManager = Manager => {
    return `
    <div class="card m-2 col-3">
    <div class="card-header text-center">
    <h2 class= "card-title">${Manager.name}</h2>
    <h3 class="card-text">${Manager.role}</h3>
    </div>
    
    <div class="my-2">
    <ul class="list-group text-dark">
    <li class="list-group-item">${Manager.id}</li>
    <li class="list-group-item"><a href="mailto:${Manager.email}">${Manager.email}</a></li>
    <li class="list-group-item">${Manager.officeNumber}</li>
    </ul>
    </div>
    </div>
    `
}

const createEngineer = engineersArr => {
    return `
    ${engineersArr
        .map(({ name, id, email, github, role }) => {
            return `
            <div class="card m-2 col-3">
            <div class="card-header text-center">
            <h2 class= "card-title">${name}</h2>
            <h3 class="card-text">${role}</h3>
            </div>
            
            <div class="my-2">
            <ul class="list-group text-dark">
            <li class="list-group-item">${id}</li>
            <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item"><a href="https://www.github.com/${github}">${github}</a></li>
            </ul>
            </div>
            </div>
            `;
        })
        .join('')}
        `}

const createIntern = internsArr => {
    return `
    ${internsArr
        .map(({ name, id, email, school, role }) => {
            return `
            <div class="card m-2 col-3">
            <div class="card-header text-center">
            <h2 class= "card-title">${name}</h2>
            <h3 class="card-text">${role}</h3>
            </div>
            <div class="my-2">
            <ul class="list-group text-dark">
            <li class="list-group-item">${id}</li>
            <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">${school}</li>
            </ul>
            </div>
            </div>
                `;
            })
            .join('')}
            `};