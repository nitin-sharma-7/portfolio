Student Registration Form
Overview
The Student Registration Form is a web application that allows students to register for a fest by providing their personal information, including name, ID, email, and contact number. The application features a user-friendly interface and dynamically displays registered participants, with options to edit or delete entries.

Features
Responsive Design: The form is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.
Dynamic Registration: Users can add student details, which will be displayed in a table format.
User -Friendly Interface: The layout is clean and intuitive, making it easy for users to navigate and register.
Font Awesome Icons: Icons are used to enhance the visual appeal of buttons.
Technologies Used
HTML: The structure of the web application is built using HTML5.

CSS: Styles are applied using an external CSS stylesheet to enhance the visual presentation.

JavaScript: An external JavaScript file is included to handle dynamic functionalities (e.g., adding, editing, and deleting student entries).

Google Fonts: The application uses the "Poppins" font for a modern look.

Font Awesome: Icons are included for better user interaction.


Usage:

Fill in the student details in the form fields.
Click the "Add" button to register the student.
The registered students will be displayed in the table below the form.
Future Enhancements
Implement functionality to edit and delete student entries.
Add form validation to ensure all fields are filled out correctly.
Store registered students in a database or local storage for persistence.

Acknowledgments
Thanks to Font Awesome for providing icons.
Thanks to Google Fonts for the beautiful font.



Student Registration Form - JavaScript Functionality
Overview
This JavaScript file provides the functionality for the Student Registration Form web application. It allows users to add, edit, and delete student entries, as well as store and retrieve data using the browser's localStorage. The script ensures that the user interface is dynamic and responsive to user actions.

Features
Add Student: Users can input student details and add them to the list.
Edit Student: Users can edit existing student information directly in the input fields.
Delete Student: Users can remove students from the list.
Persistent Storage: Student data is stored in localStorage, allowing data to persist even after the page is refreshed.
Dynamic Table Rendering: The student data is displayed in a table format, which updates automatically as students are added, edited, or deleted.
Code Structure
Key Variables
inputs: An array of input fields for student details.
stContainer: The container for displaying student entries (not used in the current implementation).
addBtn: The button to add a new student.
tableBody: The table body where student data is rendered.
table: The table element itself.
totalStudents: A display element showing the total number of registered students.
studentsData: An array that holds the student data, retrieved from localStorage or initialized as an empty array.
Event Listeners
Add Button Click: When the "Add" button is clicked, the script checks if all input fields are filled. If they are, it creates a student object and adds it to the studentsData array. The data is then saved to localStorage, and the table is re-rendered.

Table Body Click: The script listens for clicks on the table body to handle editing and deleting students. It checks if the clicked element is an edit or delete button and calls the respective functions.

Functions
toLocal(data): Saves the student data to localStorage in JSON format.

renderData(data): Clears the existing table body content and iterates over the studentsData array to create and display table rows for each student. It also updates the total number of students displayed.

delStudent(i): Deletes a student from the studentsData array based on the provided index, updates localStorage, and re-renders the table.

editStudent(i): Populates the input fields with the selected student's data for editing and then deletes the student from the list to allow for updating.

Initial Rendering
The script calls renderData(studentsData) when the page loads to display any existing student data stored in localStorage.

Getting Started
To use the JavaScript functionality:

Ensure that the HTML file is set up correctly with the necessary elements (input fields, buttons, and table).
Include this JavaScript file in your HTML using a <script> tag with the defer attribute to ensure it loads after the HTML is parsed.
Open the HTML file in a web browser to interact with the Student Registration Form.
Future Enhancements
