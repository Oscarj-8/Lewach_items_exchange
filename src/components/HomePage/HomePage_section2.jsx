import ItemsDisplay from "./ItemsDisplay";

function HomePage_section2() {
  const sampleItems = [
    {
      id: 1,
      type: "Shoe",
      name: "Nike air force",
      status: "Used for 4 months",
      returns: "Shoe, Jacket, Sweater and a Hat",
    },
    {
      id: 2,
      type: "Music instrument",
      name: "Guitar",
      status: "Used for 4 months",
      returns: "Shoe, Jacket, Sweater and a Hat",
    },
    {
      id: 3,
      type: "Household",
      name: "Curtain",
      status: "Used for 4 months",
      returns: "Curtain, Shoe",
    },
    {
      id: 4,
      type: "Household",
      name: "TV Stand",
      status: "Used for 4 months",
      returns: "Curtain, Shoe",
    },
  ];
  return (
    <div className="home-page-section2">
      <ItemsDisplay items={sampleItems} />
      <div className="adv-section"></div>
      <ItemsDisplay items={sampleItems} />
      <div className="load-more">
        <span>Load more ...</span>
      </div>
      <div className="adv-section"></div>
    </div>
  );
}

export default HomePage_section2;
