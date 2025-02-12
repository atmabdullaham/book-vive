import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Cards = ({ book }) => {
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
    <Link to={`/book/${bookId}`}>
      {" "}
      <div className="card bg-base-100  border-1">
        <figure className="bg-gray-200 py-6 mx-8 mt-8 rounded-xl">
          <img className="h-[146px] " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-4">
            {tags.map((tag, i) => (
              <h4
                className="text-base font-medium text-green-600 border-1 border-green-100 bg-green-50 rounded-2xl px-2"
                key={i}
              >
                {tag}
              </h4>
            ))}
          </div>
          <h2 className="card-title text-2xl font-semibold text-gray-800">
            {bookName}
          </h2>
          <h3 className="text-lg text-gray-600 font-medium border-dashed border-b-2 pb-4 border-gray-300">
            By: {author}
          </h3>
          <div className="card-actions flex mt-3 gap-3   ">
            <div className="badge text-lg font-medium badge-outline">
              {category}
            </div>
            <div className="badge text-lg font-medium badge-outline">
              <h4>{rating}</h4>
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
