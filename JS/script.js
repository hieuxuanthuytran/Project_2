'use strict';

const studentList = document.querySelector('.student-list');
const eachStudent = studentList.children;
const pagination = document.querySelector('.pagination');
const buttonList = pagination.querySelector('ul');
const studentsPerPage = 5;
const searchStudent = document.querySelector('.student-search');
const noResult = document.querySelector('.no-result');

// Total pages to show all students in list (depends on number students per page )
function numberOfPages() {
    let totalPages = Math.ceil(eachStudent.length / studentsPerPage);
    return totalPages;
}


// Add a loop to create specific number page (depends on total pages )
for (let i = 1; i <= numberOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.className = 'active';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonList.appendChild(pageli);
    pageli.appendChild(pageLink);
}

// Show just some students on first page when the page loads (depends on 'studentsPerPage' value)
function studentsFirstPage() {
  for (let i = 0; i < eachStudent.length; i++) {
    if ( i < studentsPerPage ) {
      eachStudent[i].style.display = '';
    } else {
      eachStudent[i].style.display = 'none';
    }
  }
}
studentsFirstPage();

//Create a input box and a button to search for students
const inputBox = document.createElement('input');
const searchButton = document.createElement('button');
function searchBox() {
  inputBox.placeholder = 'Search for students';
  searchButton.textContent = 'SEARCH';
  searchStudent.appendChild(inputBox);
  searchStudent.appendChild(searchButton);
}
searchBox();

//Show results corresponding to input value
const searchResults = [];
searchButton.addEventListener('click', () => {
    const filter = inputBox.value.toUpperCase(); //giá trị nhập vào
    searchResults.length = 0;                    //Mảng trống
    for (let i = 0; i < eachStudent.length; i++) {//Lặp qua tất cả HS
        if (eachStudent[i].innerHTML.toUpperCase().indexOf(filter) > -1) {// Đưa vị trí của giá trị nhập vào trong eachStudent để liểm tra nó có tồn tại k
            eachStudent[i].style.display = '';   // Nếu có tồn tại nó sẽ xuất ra giá trị     
        } else {
            eachStudent[i].style.display = 'none'; //Nếu không tồn tại nó sẽ chạy tiếp vòng lặp đến khi nào giá trị nhập tồn tại trong eachS
            searchResults.push(i);
        }   
    }
    if (searchResults.length === eachStudent.length) { 
        noResult.innerHTML = '<br><hr><br><h1>No Results</h1>';
    } else {
        noResult.innerHTML = ''; 
    }
});  

// Add function of each button page when 'click' to show different students per page
buttonList.addEventListener('click', (eachPage) => {
  let buttonEachPage = parseInt(eachPage.target.textContent);
  let max = buttonEachPage * studentsPerPage; 
  let min = max - studentsPerPage;
  for (let i = 0; i < eachStudent.length; i++) {
      if (i >= min && i < max) {
          eachStudent[i].style.display = '';
      }  else {
          eachStudent[i].style.display = 'none';
      }
  }    
});



