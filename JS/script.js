const studentList = document.querySelector('.student-list');
const eachStudent = studentList.children;
const pagination = document.querySelector('.pagination');
const buttonList = pagination.querySelector('ul');
const studentsPerPage = 10;
const searchStudent = document.querySelector('.student-search');
const noResult = document.querySelector('.no-result');

function numberOfPages() {
    let totalPages = Math.ceil(eachStudent.length / studentsPerPage);
    return totalPages;
}

for (let i = 1; i <= numberOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.className = 'active';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonList.appendChild(pageli);
    pageli.appendChild(pageLink);
}

function tenStudentsFirstPage() {
  for (let i = 0; i < eachStudent.length; i++) {
    if ( i < studentsPerPage ) {
      eachStudent[i].style.display = '';
    } else {
      eachStudent[i].style.display = 'none';
    }
  }
}
tenStudentsFirstPage();

const inputBox = document.createElement('input');
const searchButton = document.createElement('button');
function searchBox() {
  inputBox.placeholder = 'Search for students';
  searchButton.textContent = 'SEARCH';
  searchStudent.appendChild(inputBox);
  searchStudent.appendChild(searchButton);
}
searchBox();

const searchResults = [];
searchButton.addEventListener('click', () => {
    const filter = inputBox.value.toUpperCase();
    searchResults.length = 0;
    for (let i = 0; i < eachStudent.length; i++) {
        if (eachStudent[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            eachStudent[i].style.display = '';        
        } else {
            eachStudent[i].style.display = 'none';
            searchResults.push(i);
        }   
    }
    if (searchResults.length === eachStudent.length) {
        noResult.innerHTML = '<br><hr><br><h1>No Results</h1>';
    } else {
        noResult.innerHTML = ''; 
    }
});  


pagination.addEventListener('click', (event) => {
  noResult.innerHTML = ''; 
  let buttonNumber = parseInt(event.target.textContent);
  let max = buttonNumber * 10; 
  let min = max - 10;
  for (let i = 0; i < eachStudent.length; i++) {
      if (i >= min && i < max) {
          eachStudent[i].style.display = '';
      }  else {
          eachStudent[i].style.display = 'none';
      }
  }    
});



