import { Navbar, Card } from "./components";

function App() {
  return (
    <>
      <Navbar brandName="Hypocrites" />
      <div className="px-3">
        {Array(8)
          .fill(1)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </>
  );
}

export default App;
