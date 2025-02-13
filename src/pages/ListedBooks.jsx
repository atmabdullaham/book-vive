import { IoIosArrowDown } from "react-icons/io";
import { Outlet } from "react-router-dom";
import ReadWishlist from "../components/ReadWishlist";

const ListedBooks = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold bg-gray-200 rounded-xl p-4">
        Books
      </h1>
      <div className="flex items-center justify-center py-4">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by
            <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button>Rating</button>
            </li>
            <li>
              <button>Number of Pages</button>
            </li>
            <li>
              <button>Publish Year</button>
            </li>
          </ul>
        </div>
      </div>
      <ReadWishlist></ReadWishlist>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
