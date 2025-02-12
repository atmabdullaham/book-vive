import { Link, useLocation } from "react-router-dom";

const ReadWishlistCard = ({ book }) => {
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
  return (
    <div className="bg-base-300 border-2 border-gray-400 rounded-xl p-4">
      <div className=" flex flex-col lg:flex-row  items-start gap-10">
        <div className="flex justify-center items-center">
          <img className="h-52 " src={image} />
        </div>
        <div className=" flex flex-col gap-2 pl-3 ">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <h3 className="text-lg text-gray-600 font-medium border-dashed border-b-2 pb-4 border-gray-300">
            By: {author}
          </h3>
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
            <div className="flex gap-3">
              <p>Year of Publishing:</p>{" "}
              <h5 className="text-base font-medium">{yearOfPublishing}</h5>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-3">
              <p>Publisher:</p>{" "}
              <h5 className="text-base font-medium">{publisher}</h5>
            </div>
            <div className="flex gap-3">
              <p>Number of Pages:</p>{" "}
              <h5 className="text-base font-medium">{totalPages}</h5>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <h2 className="badge text-lg font-medium badge-outline">
              {category}
            </h2>
            <div className="flex gap-3">
              <p>Rating:</p> <h5 className="text-base font-medium">{rating}</h5>
            </div>
            <Link to={`/book/${bookId}`}>
              <button className="btn border-2">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadWishlistCard;
