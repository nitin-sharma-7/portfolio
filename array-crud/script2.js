// Select input fields, add button, and container element
const inputs = [...document.querySelectorAll(".input")];
const addBtn = document.querySelector(".btn");
const container = document.querySelector(".container");

// Load existing data from localStorage, or initialize an empty array
let datas = JSON.parse(localStorage.getItem("localDatas")) || [];

// Add event listener to handle the "Add" button click
addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Validate input fields
  if (inputs[0].value !== "" && inputs[1].value !== "") {
    // Create a data object with input values
    let data = {
      fname: inputs[0].value, // First name
      lname: inputs[1].value, // Last name
    };

    // Add the new data object to the `datas` array
    datas.push(data);

    // Render the updated list
    render(datas);

    // Save the updated data to localStorage
    addToLocal(datas);

    // Clear input fields and set focus back to the first input
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[0].focus();
  }
});

// Function to save the data array to localStorage
function addToLocal(data) {
  localStorage.setItem("localDatas", JSON.stringify(data));
}

// Function to clear all data from localStorage
function clearLocal() {
  localStorage.clear();
}

// Function to render the list of data
function render(datas) {
  container.innerHTML = ""; // Clear the container

  // Iterate over the data array and create elements for each item
  datas.map((data, index) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    // Add classes to elements for styling
    div.classList.add("student");
    delBtn.classList.add("delbtn");
    editBtn.classList.add("edit");

    // Set text content for name and buttons
    p.innerText = `${data.fname} ${data.lname}`;
    delBtn.innerText = "X";
    editBtn.innerText = "Edit";

    // Add click event to delete button
    delBtn.addEventListener("click", () => del(index));

    // Add click event to edit button
    editBtn.addEventListener("click", () => edit(index));

    // Append the elements to the `div` and then to the container
    div.append(p, delBtn, editBtn);
    container.append(div);
  });
}

// Function to delete an item by index
function del(index) {
  datas.splice(index, 1); // Remove the item from the array
  clearLocal(); // Clear the localStorage
  addToLocal(datas); // Save the updated array to localStorage
  render(datas); // Re-render the updated list
}

// Function to edit an item by index
function edit(index) {
  // Populate input fields with the existing data
  inputs[0].value = datas[index].fname;
  inputs[1].value = datas[index].lname;

  // Remove the item from the list (to be replaced by updated data)
  del(index);
}

// Initial render of the data from localStorage
render(datas);

//  chat gpt help to comments
