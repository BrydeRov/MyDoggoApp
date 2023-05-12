import React from "react";
import { useState } from 'react';

import AppLayout from "../../assets/Layouts/AppLayout";

// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ToDoCard from "../../Components/ToDoCard";

const items = ['contenido' , 'wenas']

const Index = () => {
    const [newTodo , setNewTodo] = useState('');

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }
    
    const createTodo = (event) => {
        if (event.key === 'Enter') {
            items.push(newTodo)
            setNewTodo()
        }
    };

    const deleteTodo = (item, index) => {
        items.shift(items.indexOf(item))
        console.log(items)
    }
    

    return (
        <AppLayout
            content={
                <>
                    <div className="d-flex">
                        <div className="w-100">
                            <h1 className="text-center">To Do List</h1>

                            <div className="container p-5">
                                <TextField
                                    value={newTodo}
                                    className='w-100'
                                    id="outlined-basic"
                                    label="Add to do"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onKeyDown={createTodo}
                                />

                                {items.map((item , index) => {
                                    return(
                                        <div className="my-3" key={index}>
                                            <ToDoCard  
                                                content={item}
                                                buttons={
                                                    <Button size="large" onClick={() => deleteTodo(item, index)}>
                                                        <i className='bi bi-trash text-danger'/>
                                                    </Button>
                                                }
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default Index;