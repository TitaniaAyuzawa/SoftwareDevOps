const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const bookDetailContainer = document.getElementById('book-detail-container');

// Search functionality
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    fetch(`https://example.com/search?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            const resultsHtml = data.results.map((book) => `<li>${book.title} by ${book.author}</li>`).join('');
            searchResults.innerHTML = resultsHtml;
        })
        .catch((error) => console.error(error));
});

// Book details functionality
bookDetailContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const bookId = e.target.getAttribute('data-book-id');
        fetch(`https://example.com/book/${bookId}`)
            .then((response) => response.json())
            .then((data) => {
                const bookDetailHtml = `
                    <h2>${data.title}</h2>
                    <p>Author: ${data.author}</p>
                    <p>Genre: ${data.genre}</p>
                    <p>Availability: ${data.availability}</p>
                `;
                bookDetailContainer.innerHTML = bookDetailHtml;
            })
            .catch((error) => console.error(error));
    }
});