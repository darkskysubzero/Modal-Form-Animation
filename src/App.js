import { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import './styles/style.scss';

function App() {

  const defaultUsers = [{ username: "John", age: 20 }, { username: "Sam", age: 30 }];
  const [users, setUsers] = useState(defaultUsers);

  return (
    <div className="container">
      <h1>Modal Form</h1>
      <AddUser users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
