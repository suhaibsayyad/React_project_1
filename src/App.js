import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState  ,useEffect} from 'react';


const App = () => {


  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')) || []);


  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(items));
  },[items])

  const [search, setSearch] = useState("");
  const [newItems , setNewItems] = useState("");

  const addItems = (item)=>{
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const newItems = {id, checked :false , title:item};
    const myListItems = [...items, newItems];
    setItems(myListItems);
  }

  const handleCheck = (id) => {
    const newItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(newItems);

  }


  const handleDelete =(id)=>{
    const newItems = items.filter(item => item.id != id);
    setItems(newItems);
  }


  const handleSubmit =(event)=>{
    event.preventDefault();
    if (!newItems) return;
    addItems(newItems);
    setNewItems('');
  }
  return (
    <div className="App">
      <Header />

        <AddForm onSubmit={handleSubmit}>
          <input type="text" placeholder='add Items' value={newItems} onChange={(e)=>setNewItems(e.target.value)} />
          <button type="submit" >
            add
          </button>
        </AddForm>

        <SearchForm>
          <input type="text" placeholder='search here..' value={search} onChange={(e) => setSearch(e.target.value)} />
        </SearchForm>

      <Content items={items.filter(item => ((item.title).toLowerCase()).includes(search.toLowerCase()))} setItems={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length} />
    </div>
  )
}

export default App


const SearchForm = styled.form`
    input[type="text"]{
        max-width: 550px;
        height: 50px;
        padding:10px 20px;
        font-size: 20px;
        border-radius: 10px;
    }
`

const AddForm = styled.form`
    display: flex;
    margin-bottom: 10px;

    input{
       max-width: 410px ;
       height: 45px;
       margin-right: 10px;
       padding-left: 10px;
       border-radius: 10px;
    }

    button{
        width: 60px;
        height: 45px;
        color: black;
        border: 1px solid black;
        border-radius: 10px;
        transition: all 0.2s ease;
    }

    button:active{
      background-color: black;
      color: yellow;
    }
`




