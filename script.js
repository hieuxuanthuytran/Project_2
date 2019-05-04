const studentList = document.querySelector('.student-list');
const eachStudent = studentList.children;
const pagination = document.querySelector('.pagination');
const buttonList = pagination.querySelector('ul');
const studentsPerPage = 10;
const searchStudent = document.querySelector('.student-search');
const noResult = document.querySelector('.no-result');

// Function to determine number of pages based on number of students
function numberOfPages() {
    let totalPages = Math.ceil(eachStudent.length / studentsPerPage);
    return totalPages;
}

// Loop to create page buttons based on number of required pages
for (let i = 1; i <= numberOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.className = 'active';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonList.appendChild(pageli);
    pageli.appendChild(pageLink);
}

// Function to automatically show first ten students when page loads

function tenStudentsFirstPage() {
  for (let i = 0; i < eachStudent.length; i++) {
    if ( i < studentsPerPage ) {
      eachStudent[i].style.display = '';
    } else {
      eachStudent[i].style.display = 'none';
    }
  }
}

// Function to display search box dynamically
function searchBox() {
  const inputBox = document.createElement('input');
  const searchButton = document.createElement('button');
  inputBox.placeholder = 'Enter the student\'s name here';
  searchButton.textContent = 'SEARCH';
  searchStudent.appendChild(inputBox);
  searchStudent.appendChild(searchButton);
}

// Event listener for search box functionality
// Array to hold number of hidden students

    // If all students are hidden, a 'no results' message is displayed
  

// Event listener to divide students between pages


// Function call to display first ten students on load
tenStudentsFirstPage();

// Function call to show search box if JavaScript is enabled
searchBox();