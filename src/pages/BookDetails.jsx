import { useLoaderData, useParams } from "react-router-dom";
import { addReadBooks } from "../../utils";
const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === parseInt(id));
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;
  const handleWishlistBook = (book, type) => {
    addReadBooks(book, type);
  };
  // handle read books
  const handleReadBook = (book, type) => {
    addReadBooks(book, type);
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row gap-8 ">
        <figure className="bg-gray-100 py-20   rounded-xl w-1/2 h-full  flex justify-center">
          <img className=" h-[450px]  rounded-xl  " src={image} />
        </figure>

        <div className="w-1/2 flex flex-col gap-3 pl-3">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <h3 className="text-lg text-gray-600 font-medium border-dashed border-b-2 pb-4 border-gray-300">
            By: {author}
          </h3>
          <div className=" border-dashed border-b-2 pb-4 border-gray-300">
            <h2 className="badge text-lg font-medium badge-outline">
              {category}
            </h2>
          </div>
          <p className=" text-justify">
            <span className="text-lg font-semibold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-4 border-dashed border-b-2 pb-4 border-gray-300">
            <span className="text-lg font-semibold text-black">Tag: </span>
            {tags.map((tag, i) => (
              <h4
                className="text-base font-medium text-green-600 border-1 border-green-100 bg-green-50 rounded-2xl px-2"
                key={i}
              >
                {tag}
              </h4>
            ))}
          </div>
          <div className="flex gap-3">
            <p>Number of Pages:</p>{" "}
            <h5 className="text-base font-medium">{totalPages}</h5>
          </div>
          <div className="flex gap-3">
            <p>Publisher:</p>{" "}
            <h5 className="text-base font-medium">{publisher}</h5>
          </div>
          <div className="flex gap-3">
            <p>Year of Publishing:</p>{" "}
            <h5 className="text-base font-medium">{yearOfPublishing}</h5>
          </div>
          <div className="flex gap-3">
            <p>Rating:</p> <h5 className="text-base font-medium">{rating}</h5>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleReadBook(book, "read-books")}
              className="btn border-2"
            >
              Read
            </button>
            <button
              onClick={() => handleWishlistBook(book, "wishlist-books")}
              className="btn bg-cyan-400"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
