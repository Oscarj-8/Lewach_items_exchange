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
    <div>
      <ItemsDisplay items={sampleItems} />
      <div className="ad-section">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse cumque
          ab ipsam eos provident aliquid hic labore fugit laborum exercitationem
          eligendi, voluptatibus culpa, delectus dolore ipsa earum nihil
          aspernatur expedita.
        </p>
      </div>
    </div>
  );
}

export default HomePage_section2;
