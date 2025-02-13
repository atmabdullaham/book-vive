import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getAllReadBooks } from "../../utils";
import ReadWishlistCard from "./ReadWishlistCard";

const ReadWishlistContainer = () => {
  const { typeBooks } = useParams();
  const { pathname } = useLocation();
  const parts = pathname.split("/"); // ["", "listed-books", "read-books"]
  const lastPart = parts.pop(); // "read-books"
  console.log(lastPart);
  const [books, setBooks] = useState(getAllReadBooks(typeBooks));
  useEffect(() => {
    const allBooks = getAllReadBooks(lastPart);
    console.log(allBooks);
    setBooks(allBooks);
  }, [lastPart]);
  // console.log(books);

  return (
    <div className="grid grid-cols-1 gap-3 rounded-xl">
      {books.map((book) => (
        <ReadWishlistCard key={book.bookId} book={book}></ReadWishlistCard>
      ))}
    </div>
  );
};

export default ReadWishlistContainer;
