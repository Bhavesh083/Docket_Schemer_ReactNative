import React,{useState} from 'react'
import { Text } from 'react-native';

import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';

function Home() {

    const initialTodos = [{
        title:"Cook food for mom",
        date:"Sat, 03 apr 2022 10:27:12 GMT",
        key:"1",
    },
    {
        title:"Office meeting in Room02",
        date:"Mon, 05 apr 2022 08:20:10 GMT",
        key:"2",
    },
    {
        title:"Ash birthday",
        date:"Wed, 07 apr 2022 15:12:10 GMT",
        key:"3",
    },
    {
        title:"Office meeting in Room01",
        date:"Thu, 08 apr 2022 09:00:00 GMT",
        key:"4",
    },
    {
        title:"Dark series on HBO",
        date:"Fri, 09 apr 2022 20:30:00 GMT",
        key:"5",
    }]

    const [todos,setTodos] = useState(initialTodos);
    const handleClearTodos = () =>{
        setTodos([]);
    }
    const [modalVis,setModalVis] = useState(false);
    const [todoInputValue,setTodoInputValue] = useState();
    const handleAddTodo = (todo)=>{
        const newTodos = [...todos,todo];
        setTodos(newTodos);
        setModalVis(false);
    }
    const [todoedit,setTodoedit] = useState(null);
    const handleEdittrig=(item)=>{
        setTodoedit(item);
        setModalVis(true);
        setTodoInputValue(item.title);
    }
    const handleEdit = (edit) =>{
        const newTd = [...todos];
        const todoIndex = todos.findIndex((todo)=>todo.key===edit.key);
        newTd.splice(todoIndex,1,edit);
        setTodos(newTd);
        setTodoedit(null);
        setModalVis(false);
    }
    return (
        <>
        <Header handleClearTodos={handleClearTodos} />
        <ListItems handleEdittrig={handleEdittrig} todos={todos} setTodos={setTodos} />
        <InputModal handleEdit={handleEdit} todos={todos} handleAddTodo={handleAddTodo} modalVis={modalVis} setModalVis={setModalVis} todoedit={todoedit} setTodoedit={setTodoedit} todoInputValue={todoInputValue} setTodoInputValue={setTodoInputValue} />
        </>
    );
}
 
export default Home;