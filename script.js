
function addPetToList() {
  let petName = document.getElementById('petName').value;
  let petAge = document.getElementById('petAge').value;
  let petGender = document.getElementById('petGender').value;
  // get the reference for the body
  let body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 1; i++) {
   // creates a table row
   let row = document.createElement("tr");
   for (let j = 0; j < 1; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    let cell = document.createElement("td");
    let cellName = document.createTextNode(petName);
    cell.appendChild(cellName);
    row.appendChild(cell);
   }
   for (let j = 0; j < 1; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    let cell = document.createElement("td");
    let cellAge = document.createTextNode(petAge);
    cell.appendChild(cellAge);
    row.appendChild(cell);
   }
   for (let j = 0; j < 1; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    let cell = document.createElement("td");
    let cellGender = document.createTextNode(petGender);
    cell.appendChild(cellGender);
    row.appendChild(cell);
   }
   // add the row to the end of the table body
   tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
 }