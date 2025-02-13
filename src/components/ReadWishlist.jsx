import { Link, NavLink } from "react-router-dom";

const ReadWishlist = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lift">
        <NavLink
          to="/listed-books/read-books"
          role="tab"
          className={({ isActive }) => `tab${isActive ? "tab-active" : ""}`}
        >
          Read Books
        </NavLink>
        <NavLink
          to="/listed-books/wishlist-books"
          role="tab"
          className={({ isActive }) => `tab${isActive ? "tab-active" : ""}`}
        >
          Wishlist Books
        </NavLink>
      </div>
    </div>
  );
};

export default ReadWishlist;
