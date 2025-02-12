import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

const Home = () => {
  const books = useLoaderData();
  // console.log(books);
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <h1 className="text-center text-3xl font-semibold py-12">Books</h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Cards key={book.bookId} book={book}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
