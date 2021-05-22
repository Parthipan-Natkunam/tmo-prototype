import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="flex justify-center items-center text-center flex-col"
      style={{ minHeight: "calc(100vh - 5.5rem)" }}
    >
      <h1 className="text-primary font-bold text-8xl">404</h1>
      <span className="text-base-content text-opacity-40">Page Not Found!</span>
      <Link className="text-base-content text-opacity-80 mt-5" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
