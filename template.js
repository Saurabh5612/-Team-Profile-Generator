//Manager
const managerTemplate = (employees) => `
<div class="col-sm-4" style="margin-top: 50px;">
  <div class="card" style="width: 20rem;">
  <div class="card-header bg-primary">
  <h1 class="card-title bg-primary text-white">${employees.name}</h1>
  <h2 class = "card-subtitle text-white"><i class="fas fa-mug-hot"></i>${employees.getRole()}<h2>
  </div>
  <div class="card-body">
    <ul class="list-group text-left">
      <li class="list-group-item">ID: ${employees.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${employees.email}">${employees.email}</a></li>
      <li class="list-group-item">Office number: ${employees.officeNumber}</li>
    </ul>
    </div>
  </div>
</div>
  `

//Engineer
const engineerTemplate = (employees) => {
  return `
  <div class="col-sm-4" style="margin-top: 50px;">
<div class ="card" style="width: 20rem;">
<div class="card-header bg-primary">
<h1 class="card-title bg-primary text-white">${employees.name}</h1>
<h2 class = "card-subtitle text-white"><i class="fas fa-glasses"></i>${employees.getRole()}<h2>
</div>
<div class ="card-body">
  <ul class="list-group text-left">
    <li class="list-group-item">ID: ${employees.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${employees.email}">${employees.email}</a></li>
    <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${employees.github}">${employees.github}</a></li>
  </ul>
  </div>
  </div>
</div>
`};

//Intern
const internTemplate = (employees) => `
<div class="col-sm-4" style="margin-top: 50px;">
<div class ="card" style="width: 20rem;">
<div class="card-header bg-primary">
<h1 class="card-title bg-primary text-white">${employees.name}</h1>
<h2 class = "card-subtitle text-white"><i class="fas fa-user-graduate"></i>${employees.getRole()}<h2>
</div>
<div class ="card-body">
<ul class="list-group text-left">
<li class="list-group-item">ID: ${employees.id}</li>
<li class="list-group-item">Email: <a href="mailto:${employees.email}">${employees.email}</a></li>
<li class="list-group-item">School: ${employees.school}</li>
</ul>
  </div>
</div>
</div>
`

//FUNCTION to receive class instances and inserts them to HTML template literal
const generatePage = (employees) => `
<!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team-Profile</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
<div class="container-fluid p-0 mb-0">
        <div class="jumbotron jumbotron-fluid bg-danger text-light">
            <div class="container text-center">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center" id="cards">
      ${employees.map((person) => {
  console.log(`person.role: ${person.getRole()}`)
  if (person.getRole() === 'Manager') {
    console.log('generating manager');
    return managerTemplate(person)
  }
  else if (person.getRole() === 'Engineer') {
    console.log('generating Engineer');
    return engineerTemplate(person)
  }
  else {
    console.log('person');
    return internTemplate(person)
  }
}).join("")
  }
  </div>
  </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>
`;

module.exports = generatePage;