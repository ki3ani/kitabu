let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function render() {
	const booksContainer = document.querySelector("#books-container");
	booksContainer.innerHTML = "";
	for (let i = 0; i < myLibrary.length; i++) {
		const book = myLibrary[i];
		const bookContainer = document.createElement("div");
		bookContainer.classList.add("book-container");
		const title = document.createElement("h3");
		title.textContent = book.title;
		bookContainer.appendChild(title);
		const author = document.createElement("p");
		author.textContent = `by ${book.author}`;
		bookContainer.appendChild(author);
		const pages = document.createElement("p");
		pages.textContent = `${book.pages} pages`;
		bookContainer.appendChild(pages);
		const read = document.createElement("button");
		read.textContent = book.read ? "Read" : "Not Read";
		read.addEventListener("click", () => {
			book.read = !book.read;
			render();
		});
		bookContainer.appendChild(read );
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
        myLibrary.splice(i, 1);
        render();
        });
        bookContainer.appendChild(remove);
        booksContainer.appendChild(bookContainer);
        }
        }
        
        const newBookButton = document.querySelector("#new-book");
        newBookButton.addEventListener("click", () => {
        const formPopup = document.querySelector("#form-popup");
        formPopup.style.display = "block";
        });
        
        const form = document.querySelector("#form-popup form");
        form.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const author = event.target.elements.author.value;
        const pages = parseInt(event.target.elements.pages.value);
        const read = event.target.elements.read.checked;
        const book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        render();
        const formPopup = document.querySelector("#form-popup");
        formPopup.style.display = "none";
        form.reset();
        });


        render();


