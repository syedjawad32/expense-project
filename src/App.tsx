// import Product from "./components/Product"
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
const App = () => {
  // const [category,setCategory] = useState('')

  //   return (
  //     <div>
  //       <select name="" id="" className="form-select" onChange={event=>setCategory(event.target.value)}>
  //         <option value=""></option>
  //         <option value="clothing">clothing</option>
  //         <option value="marketing">marketing</option>
  //       </select>
  //       < Product category={category}/>
  //     </div>
  //   )
  const [users, setUsers] = useState<User[]>([]);
  const [error,setError] = useState('')
  useEffect(() => {
    const controller = new AbortController
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users",{signal:controller.signal})
      .then((res) => setUsers(res.data))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)});
      return ()=> controller.abort();
  }, []);

  return(
    <>
     {error && <p className="text text-danger">{error}</p>}
    <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
    </>
  )

};

export default App;
