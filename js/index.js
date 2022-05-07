const bookList = document.querySelector('#list')

document.addEventListener("DOMContentLoaded", function() {
    fetch(`http://localhost:3000/books`)
    .then(resp => resp.json())     //con
    .then(books => {
        books.forEach((book) => {
            bookHTML(book);
        });
    });
});   //3//    

const bookHTML = (book) => {
    const li = document.createElement('li')      //for Eac
    li.innerText = book.title
    bookList.append(li);
}
// List Books

// 
//1. When the page loads
//2. Get a list of books from http://localhost:3000/books and
//3. Display their titles by creating a li
//4. For each (iteration) book and adding each li to the ul#list element.