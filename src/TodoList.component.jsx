import React from 'react';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const TodoList=({id,item,onDelete})=>{
 return(
     <>
       <p>
        <IndeterminateCheckBoxIcon onClick={()=>{
                                                  onDelete(id)
                                                }}>

        </IndeterminateCheckBoxIcon>
        {item}
        </p>
     </>
 )
}

export default TodoList;