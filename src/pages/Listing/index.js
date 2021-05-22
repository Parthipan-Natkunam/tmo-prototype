import { Card } from "../../components";
const ListingsPage = () => {
  return (
    <>
      {Array(8)
        .fill(1)
        .map((_, index) => (
          <Card key={index} />
        ))}
    </>
  );
};

export default ListingsPage;
