// Search Input Arrow Function
const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    searchInput.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayBookUp(data))
}

// Search Results Display Box 
const displayBookUp = books => {
    const booksDocs = books.docs;
    const bookContainer = document.getElementById('Book-Container');
    bookContainer.textContent = '';

    // Results Found Number
    const resultsFound = books.numFound;
    if(resultsFound === 0){
        const resultsContainer = document.getElementById('Results-Found');
        resultsContainer.textContent = '';
        const divBox = document.createElement('div');
        divBox.innerHTML = `
            <h3 class="text-center">No Results Found: ${resultsFound}</h3>
        `;
        resultsContainer.appendChild(divBox);
    } else{
        const resultsContainer = document.getElementById('Results-Found');
        resultsContainer.textContent = '';
        const divBox = document.createElement('div');
        divBox.innerHTML = `
            <h3 class="text-center">Results Found: ${resultsFound}</h3>
        `;
        resultsContainer.appendChild(divBox);
    }
    
    // forEach Function
    booksDocs.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img height="300" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title"><b>Book Name:</b> ${book.title}</h6>
                    <p class="card-text"><b>Author Name:</b> ${book.author_name}</p>
                    <p class="card-text"><b>publisher:</b> ${book.publisher}</p>
                    <p class="card-text"><b>First Publish Year:</b> ${book.first_publish_year}</p>
                </div>
                <div class="card-footer bg-white border-0 ">
                </div>
            </div>
        `;
        bookContainer.appendChild(div);
    })
}
