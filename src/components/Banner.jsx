import bgImage from "../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-300 min-h-[calc(100vh-200px)] rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="rounded-xl" src={bgImage} />
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold">
            Book to Freshen up your bookshelf
          </h1>
          <div>
            <button className="btn btn-primary">View the List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
