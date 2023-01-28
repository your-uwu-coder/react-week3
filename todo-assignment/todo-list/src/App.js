import './App.css';
import {useState} from 'react'
import ListForm from './components/ListForm'
import DisplayList from './components/DisplayList';

function App() {

  const [list, setList] = useState([])

  return (
    <div className="App">
      <ListForm list={list} setList={setList} />
      <DisplayList list={list} setList={setList} />
    </div>
  );
}

export default App;
