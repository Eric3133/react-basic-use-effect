import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const url = "http://geek.itheima.net/v1_0/channels"
function App() {
  const [list, setList] = useState([])
  useEffect(()=>{
    async function getList () {
      const res = await fetch(url)
      const list = await res.json()
      console.log(list);
      setList(list.data.channels)
    }
    getList()
  }, [])
  return (
    <div className="App">
      this is app
      <ul>
        {
          list.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
        </ul>
    </div>
  );
}

export default App;
