import React, { useState } from "react";

const ListForm = (props) => {

//Use State
    const [todo, setToDo] = useState([])
    

//useState for us to hold the data of our list entries
    const [list, setList] = useState([])


//OnChangeHandler
    //This is to help us with the value of our input
const onChangeHandler = (e) => {
    setToDo({...todo, [e.target.name]: e.target.value})
    console.log(e.target.value);
}

//SubmitHandler 
    //We always add preventDefault and also to store new array in here
const onSubmitHandler = (e) => {
    e.preventDefault()
    setList({...list, todo})
    setToDo([])
}    


    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="toDo" id="toDoList" placeholder="Add To-Do" onChange={onChangeHandler} />
            <button type="submit">Submit</button>
        </form>
        {/* {
            list.map((todo) => (
                <p>{todo.toDo}</p>
            ))
        } */}
        </>
    )
}

export default ListForm;