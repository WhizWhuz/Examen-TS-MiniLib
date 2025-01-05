"use strict";
// Interface
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DOM
const modalWindow = document.querySelector('.modal');
const arrowBack = document.querySelector('.arrowback');
const enterWindow = document.querySelector('.clickopen');
const enterBtn = document.querySelector('.open');
const books = document.querySelectorAll('#book');
const modalBook = document.querySelector('#modalbook');
const bookIdArray = [
    document.querySelector('.goodnightmoon'),
    document.querySelector('.veryhungrycater'),
    document.querySelector('.wrinkleoftime'),
    document.querySelector('.haroldandthepurp'),
    document.querySelector('.wherethewild'),
    document.querySelector('.madeline'),
    document.querySelector('.petertherabbit'),
    document.querySelector('.charlottesweb')
];
const modalAuthor = document.querySelector('.modalauthor');
const modalTitle = document.querySelector('.modaltitle');
const bookModalAuthor = document.querySelector('.bookmodalauthor');
const bookModalTitle = document.querySelector('.bookmodaltitle');
const description = document.querySelector('.desc');
const audience = document.querySelector('.audience');
const pages = document.querySelector('.pages');
const publisher = document.querySelector('.publisher');
const published = document.querySelector('.published');
// API Fetch
const getBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books', {
        method: 'GET',
    });
    const data = yield response.json();
    return data;
});
// Display API
const displayInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const bookInfo = yield getBook();
    for (let i = 0; i < bookIdArray.length; i++) {
        const bookElement = bookIdArray[i];
        const apiBooks = bookInfo[i];
        if (bookElement) {
            bookElement.style.backgroundColor = apiBooks.color;
            (_a = books[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                modalWindow.classList.toggle('opacity');
                modalBook.style.backgroundColor = apiBooks.color;
                modalAuthor.textContent = apiBooks.author;
                modalTitle.textContent = apiBooks.title;
                bookModalAuthor.textContent = apiBooks.author;
                bookModalTitle.textContent = apiBooks.title;
                description.textContent = apiBooks.plot;
                audience.innerHTML = `<b>Audience:</b> <i>${apiBooks.audience}</i>`;
                pages.innerHTML = `<b>Pages:</b> <i>${apiBooks.pages}</i>`;
                published.innerHTML = `<b>Published:</b> <i>${apiBooks.year}</i>`;
                publisher.innerHTML = `<b>Publisher:</b> <i>${apiBooks.publisher}</i>`;
                console.log(apiBooks);
            });
        }
    }
});
// Call
void displayInfo();
// Event Listeners
arrowBack.addEventListener('click', () => {
    modalWindow.classList.toggle('opacity');
});
enterBtn.addEventListener('click', () => {
    enterWindow.classList.toggle('opacity');
});
