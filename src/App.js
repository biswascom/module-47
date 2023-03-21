import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Display></Display>
    </div>
  );
}

function Display(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Display Api Data with React</h1>
      {
        users.map(user => <User name={user.name} email={user.email} address={user?.address?.city}></User>)
      }
    </div>
  )
}

function User(props) {
  return(
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
      <p>City: {props.address}</p>
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(0);
//   const increaseCounter = () =>setCount(count + 1);
//   const decreaseCounter = () => setCount(count - 1);

//   // const IncreaseCounter = () =>{
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // }
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCounter}>Increase</button>
//       <button onClick={decreaseCounter}>Decrease</button>
//     </div>
//   )
// }

export default App;
