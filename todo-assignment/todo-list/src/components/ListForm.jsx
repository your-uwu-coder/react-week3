import React, { useState } from "react";
import './ListForm.css'

const ListForm = (props) => {
    const {list, setList} = props;

    //Use State
    const [toDo, setToDo] = useState ({
        id: null,
        toDo: ''
    })
    
    //useState to store and use an array to hold our objects
    // const [list, setList] = useState([])
    


//OnChangeHandle
    //This is to help us with the value of our input
const onChangeHandle = (e) => {
    setToDo({...toDo, [e.target.name]: e.target.value})
    console.log(e.target.value);
}

//SubmitHandler 
    //We always add preventDefault and also to store new array in here
const onSubmitHandle = (e) => {
    e.preventDefault();

    //Stores our data. We need to use [] since we places [] inside the useState
    //Generate random id for the list
    let id = crypto.randomUUID()
    console.log(id);
    let newList= {...toDo, id:id}
    setList([...list, newList])

    //Reset form when you submit
    setToDo({
        toDo: ''
    })
}    
    return (
        <>
        <form onSubmit={onSubmitHandle}>
            <input type="text" name="toDo" placeholder="Add To-Do" onChange={onChangeHandle} value={toDo.toDo} />
            <button type="submit">Submit</button>
        </form>
        </>
    )}

export default ListForm;