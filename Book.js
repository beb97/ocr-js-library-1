export class Book {

  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  readBook(page) {
    let result = 0;
    if(page < 1 || page > this.pages) {
      // Nada
    } else if (page >= 1 && page < this.pages) {
      this.currentPage = page;
      result = 1;
    } else if (page == this.pages) {
      this.currentPage = page;
      this.read = true;
      result = 1;
    }
    return result;
  }
}
let bookOne = new Book("Bible", "Jesus", "best seller 1", 500, 0, false);
let bookTwo = new Book("Coran", "Mahomet", "best seller 2", 1000, 0, false);
let bookThree = new Book("Torah", "Jezus", "this one is more dangerous", 750, 0, false);
export const books = [bookOne, bookTwo, bookThree];
