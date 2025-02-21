import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm'


function handleClick(){
  alert("Hey!!!!!");
}

function handleChange(e){
  console.log(e.target.value);
}

function handleSubmit(e){
  e.preventDefault();
  console.log(e.target.value);
}

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1,2,3]);
  const [user, setUser] = useState({ name: "Maria" , age: 48});
  console.log(items)

  const aggiungiItem = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem])
    console.log(items)

  }
  
  const updateUserName = () => {
    const updatedUser = {...user, name:"Marco"};
    setUser(updatedUser);
    console.log(items)

  }

  
  const [cities, setCities ] = useState([
    {
    id: 0,
    title: "Lisbona",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae magnam recusandae dolore similique, perspiciatis nemo beatae error maxime architecto eos nulla consectetur impedit placeat. Veritatis commodi ab mollitia fugit!",
    imgurl:"https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: false,  
  }, 
  {
    id: 1,
    title: "Madrid",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae magnam recusandae dolore similique, perspiciatis nemo beatae error maxime architecto eos nulla consectetur impedit placeat. Veritatis commodi ab mollitia fugit!",
    imgurl:"https://images.unsplash.com/photo-1570698473651-b2de99bae12f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: true,  
  },  
  {
    id: 2,
    title: "Berlino",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae magnam recusandae dolore similique, perspiciatis nemo beatae error maxime architecto eos nulla consectetur impedit placeat. Veritatis commodi ab mollitia fugit!",
    imgurl:"https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: true,  
  },  
  {
    id: 3,
    title: "Parigi",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae magnam recusandae dolore similique, perspiciatis nemo beatae error maxime architecto eos nulla consectetur impedit placeat. Veritatis commodi ab mollitia fugit!",
    imgurl:"https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: false,  
  },   

  ]);

  const addCities =(city) => {
    setItems([...cities, city])
  };

  return (
    <>
    <CardForm>addCities = {addCities} </CardForm>
      <div className=" grid grid-cols-4 gap-10">
      {/*<Card
      isVisited={true}
        title="Lisbona"
        imgURL="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.
      </Card>
      <Card
      isVisited={false}
        title="Madrid"
        imgURL="https://images.unsplash.com/photo-1570698473651-b2de99bae12f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, assumenda?
      </Card>
      <Card
      isVisited={true}
        title="Berlino"
        imgURL="https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsam?
      </Card>
      <Card
      isVisited={false}
        title="Parigi"
        imgURL="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, minus.
      </Card>*/}
      {cities
       /* .filter((city) => !city.isVisited )*/
        .map((city) => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgURL={city.imgurl}>
            {city.description}
          </Card>
      ) )}
     </div>      
      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>
          alert
        </button>
        <button onClick={aggiungiItem}>
          prova
        </button>
        <input type="text" onChange={handleChange} />
        <form onSubmit={handleSubmit}>
          <button type="submit">Invia</button>
        </form>
      </div>*/}
    </>
  )
}

export default App
