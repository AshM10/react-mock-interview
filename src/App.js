import "./App.css";

const CATS = [
  {
    name: "Fluffikins",
    breed: "Orange tabby",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 8,
  },
  {
    name: "Blizzard",
    breed: "Calico",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 7,
  },
  {
    name: "Garfield",
    breed: "Maine coon",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 4,
  },
  {
    name: "Blaire",
    breed: "Siberian",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 1,
  },
  {
    name: "Savannah",
    breed: "Scottish fold",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 10,
  },
  {
    name: "Sudoku",
    breed: "Munchkin",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 2,
  },
  {
    name: "Brownie",
    breed: "Ragdoll",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 9,
  },
  {
    name: "Winnie",
    breed: "Sphynx",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 7,
  },
  {
    name: "Puffins",
    breed: "Bengal",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 6,
  },
];

const Card = ({ name, breed, url, description, age }) => {
  return (
    <article className="Card">
      <img className="card-image" src={url} alt="kitten" />
      <div className="card-content">
        <h1 className="card-title">{name}</h1>
        <h2 className="card-breed-age">
          {breed} • {age} {age > 1 ? "years" : "year"}
        </h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

const MAX_CATS = 6;
const App = () => {
  return (
    <section className="App">
      {CATS.slice(0, MAX_CATS).map((cat) => {
        return <Card {...cat} />;
      })}
    </section>
  );
};

export default App;
