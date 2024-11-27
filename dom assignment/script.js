// Select all input fields with the class "input" and convert the NodeList to an array
const inputs = [...document.querySelectorAll(".input")];
// Select the container for displaying students and the add button
const stContainer = document.querySelector(".students-container");
const addBtn = document.querySelector(".add-button");

// Select the table body where student data will be rendered
const tableBody = document.querySelector(".table-body");
//select the table
const table = document.querySelector(".table");
// total students
const totalStudents = document.querySelector(".total-students");
// Retrieve existing student data from localStorage or initialize an empty array
let studentsData = JSON.parse(localStorage.getItem("stdata")) || [];

// Event listener for the "Add" button
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Check if all input fields are filled
  if (
    inputs[0].value !== "" &&
    inputs[1].value !== "" &&
    inputs[2].value !== "" &&
    inputs[3].value !== ""
  ) {
    // Create a student object with values from the input fields

    let student = {
      name: inputs[0].value,
      id: inputs[1].value,
      email: inputs[2].value,
      contact: inputs[3].value,
    };
    // Add the new student object to the studentsData array
    studentsData.push(student);
  }
  toLocal(studentsData);
  // Render the updated student data in the table

  renderData(studentsData);
  // Clear the input fields after adding the student
  //   inputs[0].value = "";
  //   inputs[1].value = "";
  //   inputs[2].value = "";
  //   inputs[3].value = "";
  inputs.forEach((input) => (input.value = ""));
  // Focus on the first input field for convenience
  inputs[0].focus();
});
//// Function to save student data to localStorage
function toLocal(data) {
  localStorage.stdata = JSON.stringify(data);
}
// Function to render student data in the table
function renderData(data) {
  //   console.log(data);
  tableBody.innerHTML = ""; // Clear the existing table body content
  // Iterate over the student data and create table rows
  if (studentsData.length > 5) {
    table.style.overflowY = "scroll";
  }
  data.map((student, index) => {
    // Create a new table row // Add a class to the row

    // Create HTML for the table row with student data and action buttons
    const tableRaw = document.createElement("tr");
    tableRaw.classList.add("table-raw");
    const html = `<td>${student.name}</td>
                <td>${student.id}</td>
                <td>${student.email}</td>
                <td>${student.contact}</td>
                <td><i title="edit student info" class="editbtn fa-solid fa-pen-to-square"></i></td>
                <td><i title="delete student" class="fa-solid fa-trash delbtn"></i></td>`;
    tableRaw.innerHTML = html; // Set the inner HTML of the row
    tableRaw.dataset.index = index; // Store the index in a data attribute
    tableBody.append(tableRaw); // Append the row to the table body
  });
  totalStudents.innerText = studentsData.length;
}
// Event listener for clicks on the table body
tableBody.addEventListener("click", (e) => {
  // Get the index of the student from the clicked row
  const index = e.target.parentElement.parentElement.getAttribute("data-index");
  // Check if the delete button was clicked
  if (e.target.classList.contains("delbtn")) {
    delStudent(index); // Call the delete function
  }
  // Check if the edit button was clicked
  if (e.target.classList.contains("editbtn")) {
    // console.log(index);
    editStudent(index); //Call the edit function
  }
});
// Function to delete a student from the data
function delStudent(i) {
  studentsData.splice(i, 1); // Remove the student at the specified index
  localStorage.clear(); // Clear localStorage
  toLocal(studentsData); // Save the updated data to localStorage
  renderData(studentsData); // Re-render the updated student data
}
function editStudent(i) {
  let student = studentsData[i]; // Get the student object at the specified index

  // Populate the input fields with the student's current data
  inputs[0].value = student.name;
  inputs[1].value = student.id;
  inputs[2].value = student.email;
  inputs[3].value = student.contact;

  // Call the delete function to remove the student from the list
  delStudent(i);
}
// Initial rendering of student data when the page loads
renderData(studentsData);
