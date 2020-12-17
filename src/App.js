import {useState} from 'react';
import './App.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TodoList from './TodoList.component';


import {TextField} from '@material-ui/core';

function App() {

  const [inputItem,setInputItem]=useState("");
  const [itemList,setItemList]=useState([]);
  

const handleChange=(e)=>{
 setInputItem(e.target.value);
 
}

const handleClick=(e)=>{
 // alert("clicked");

itemList.push(inputItem);
console.log(itemList);
setItemList(itemList);
setInputItem("");

}

const handleDelete=(id)=>{
   //alert(id);
   let newarr=itemList.filter((item,index)=>
                               (index!==id)
                              );
   console.log(newarr);
   setItemList(newarr);

  
}

  return (
    <div className="App">
      <section className="App-section">

      <h3>
        TODO List
      </h3>
      <div className="todobox">
          
          <TextField type="text" value={inputItem} label="add todo" onChange={handleChange}></TextField>
          <AddCircleOutlineIcon  onClick={handleClick}></AddCircleOutlineIcon>
          
          <p>
            {
              itemList.map((item,index)=>{return(
                                    <div>
                                        <span>
                                          <TodoList key={index} 
                                                    id={index} 
                                                    item={item}
                                                    onDelete={handleDelete}>
                                          </TodoList>
                                        </span>
                                     </div>   
                                                               
              )})
            }
          </p>
      </div>
      
      </section>
    </div>
  );
}

export default App;
