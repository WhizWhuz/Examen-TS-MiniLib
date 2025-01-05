// Interface

interface BookInfo {
    audience: string;
    author: string;
    color: string;
    id: number;
    pages: number | null;
    plot: string;
    publisher: string;
    title: string;
    year: number;
}

// DOM


const modalWindow = document.querySelector('.modal') as HTMLElement;
const arrowBack = document.querySelector('.arrowback') as HTMLElement;
const enterWindow = document.querySelector('.clickopen') as HTMLElement;
const enterBtn = document.querySelector('.open') as HTMLElement;

const books = document.querySelectorAll<HTMLElement>('#book');
const modalBook = document.querySelector('#modalbook') as HTMLElement;

const bookIdArray = [
    document.querySelector('.goodnightmoon'),
    document.querySelector('.veryhungrycater'),
    document.querySelector('.wrinkleoftime'),
    document.querySelector('.haroldandthepurp'),
    document.querySelector('.wherethewild'),
    document.querySelector('.madeline'),
    document.querySelector('.petertherabbit'),
    document.querySelector('.charlottesweb')
] as HTMLElement[];

const modalAuthor = document.querySelector('.modalauthor') as HTMLElement;
const modalTitle = document.querySelector('.modaltitle') as HTMLElement;
const bookModalAuthor = document.querySelector('.bookmodalauthor') as HTMLElement;
const bookModalTitle = document.querySelector('.bookmodaltitle') as HTMLElement;

const description = document.querySelector('.desc') as HTMLElement;
const audience = document.querySelector('.audience') as HTMLElement;
const pages = document.querySelector('.pages') as HTMLElement;
const publisher = document.querySelector('.publisher') as HTMLElement;
const published = document.querySelector('.published') as HTMLElement;


// API Fetch

const getBook = async (): Promise<BookInfo[]> => {
    const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books', {
        method: 'GET',
    });
    const data: BookInfo[] = await response.json();
    return data;
};


// Display API

const displayInfo = async (): Promise<void> => {
    const bookInfo = await getBook();

    for (let i = 0; i < bookIdArray.length; i++) {
        const bookElement = bookIdArray[i];
        const apiBooks = bookInfo[i];

        if (bookElement) {
            bookElement.style.backgroundColor = apiBooks.color;

            books[i]?.addEventListener('click', () => {
                modalWindow.classList.toggle('opacity');
                modalBook.style.backgroundColor = apiBooks.color;
                modalAuthor.textContent = apiBooks.author;
                modalTitle.textContent = apiBooks.title;
                bookModalAuthor.textContent = apiBooks.author;
                bookModalTitle.textContent = apiBooks.title;
                description.textContent = apiBooks.plot;

                audience.innerHTML = `<b>Audience:</b> <i>${apiBooks.audience}</i>`;
                published.innerHTML = `<b>Published:</b> <i>${apiBooks.year}</i>`;
                pages.innerHTML = `<b>Pages:</b> <i>${apiBooks.pages}</i>`;
                publisher.innerHTML = `<b>Publisher:</b> <i>${apiBooks.publisher}</i>`;

                console.log(apiBooks);
            });
        }
    }
};

// Call

void displayInfo();

// Event Listeners

arrowBack.addEventListener('click', () => {
    modalWindow.classList.toggle('opacity');
});

enterBtn.addEventListener('click', () => {
    enterWindow.classList.toggle('opacity');
});
