// get all data readBooks data from local storage

import toast from "react-hot-toast";

// Get books from local storage
const getAllReadBooks = (typeBooks) => {
 const all = localStorage.getItem(typeBooks);
 return all ? JSON.parse(all) : [];
};

// add readBooks data to local storage
const addReadBooks = (book, type) => {
 // console.log(book)
 const books = getAllReadBooks(type)
 // console.log(readBooks)
 const isExist = books.some((item) => item.bookId === Number(book.bookId));
 // console.log(isExist)
 if (isExist) {
  return toast.error("The book has already been added.");
 }
 books.push(book);
 localStorage.setItem(type, JSON.stringify(books));
 toast.success("Successfully added!");
}

// remove readBooks data from local storage
export { addReadBooks, getAllReadBooks }