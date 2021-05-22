import { SearchIcon } from "../images";

const Navbar = ({ brandName }) => {
  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content justify-between">
      <div className="flex-1 px-2 mx-2">
        <span className="text-3xl font-title font-bold">{brandName}</span>
      </div>
      <div className="flex-1 lg:flex-none mx-4 p-1.5">
        <div className="form-control relative">
          <span className="absolute bottom-3 left-0.5">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost pl-7"
          />
        </div>
        {/* <div>
          <button className="btn btn-square btn-ghost">
            <SearchIcon />
          </button>
        </div> */}
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost text-primary">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
