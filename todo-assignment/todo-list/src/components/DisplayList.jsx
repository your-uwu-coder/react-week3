import React, {useState} from 'react';
import './DisplayList.css'

const DisplayList = (props) => {
    const {list, setList} = props;


//delete
const deleteMe = (id) => {
    let deleteList = list.filter((toDo) => toDo.id !== id)
    setList(deleteList);
}

//checked box
// const checkMe = (toDo) => {
//     toDo.complete = !toDo.complete
//     setList([...list])
// }

//mapping through list
    return (
        <>
        <div className='list-container'>
            <h2>My To-Do List</h2>
                {
                list.map((toDo) => (
                    <div key={toDo.id} className='main-list' >
                        <input type="checkbox" />
                        <p className="strikethrough">{toDo.toDo}</p>
                        <button onClick={() => deleteMe(toDo.id)} className='smallBtn'>Delete</button>
                    </div>
                ))}
        </div>
        </>
    )
}

export default DisplayList;