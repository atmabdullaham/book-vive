import { Link } from "react-router-dom";

const ReadWishlist = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lift">
        <Link to="/listed-books/read-books" role="tab" className="tab">
          Read Books
        </Link>
        <Link to="/listed-books/wishlist-books" role="tab" className="tab">
          Wishlist Books
        </Link>
      </div>
    </div>
  );
};

export default ReadWishlist;
