import { Navbar } from "./components";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Navbar brandName="Hypocrites" />
      <div className="px-3">
        <Routes />
      </div>
    </>
  );
}

export default App;
