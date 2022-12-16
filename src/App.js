import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/Users';
import { useState } from 'react';

function App() {

  const dispatch =  useDispatch();
  const userList = useSelector((state) => state.users.value );

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  

  const onChangeName = (e) => {
      setName(e.target.value);
  }



// console.log("--- ", userList);

  return (
    <div className="App">
      <div className='addUser'>
        {username}
        <input type="text" placeholder="Name..." onChange={onChangeName}/>
        <input type="text" placeholder="Username..." 
        onChange={(event) => { 
              setUsername(event.target.value)}
            } />
        <button onClick={() => {dispatch(addUser({
          id: 2333,
          name: name,
          username: username
        }))}}>Add User</button>
      </div>
      <div className='displayUsers'>
      {userList.map((user, i) => {
        return <div key={i}>
          <h1>Name: {user.name}</h1>
          <h1>Username: {user.username}</h1>
        </div>
      })}
      </div>
    </div>
  );
}

export default App;
