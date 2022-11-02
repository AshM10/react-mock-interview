import React from 'react';
import './App.css';

const CATS = [
  {
    name: 'Fluffikins',
    breed: 'Orange tabby',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 8,
  },
  {
    name: 'Blizzard',
    breed: 'Calico',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 7,
  },
  {
    name: 'Garfield',
    breed: 'Maine coon',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 4,
  },
  {
    name: 'Blaire',
    breed: 'Siberian',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 1,
  },
  {
    name: 'Savannah',
    breed: 'Scottish fold',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 10,
  },
  {
    name: 'Sudoku',
    breed: 'Munchkin',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 2,
  },
  {
    name: 'Brownie',
    breed: 'Ragdoll',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 9,
  },
  {
    name: 'Winnie',
    breed: 'Sphynx',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 7,
  },
  {
    name: 'Puffins',
    breed: 'Bengal',
    url: 'https://placekitten.com/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 6,
  },
];

// pass the whole object in this function and input the value inside the HTML

const Card = ({ name, breed, url, description, age }) => {
  return (
    <article className='Card'>
      <img className='card-image' src={url} alt='kitten' />
      <div className='card-content'>
        <h1 className='card-title'>{name}</h1>
        <h2 className='card-breed-age'>
          {breed} • {age} {age > 1 ? 'years' : 'year'}
        </h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

// make sure grid consists of 6 cards only hence max_cats
// slice method will return 6 cards and map will go through object data
// using the spread operator will iterate through the array

const MAX_CATS = 6;
const App = () => {
  return (
    <section className='App'>
      {CATS.slice(0, MAX_CATS).map((cat) => {
        return <Card key={cat?.name} {...cat} />;
      })}
    </section>
  );
};

export default App;
