import React, { useState } from 'react'
import Modal from '../ModalWindow/Modal'
import { v4 as uuidv4 } from 'uuid'
import './Main.css'
import ToDo from './ToDo';

export default function Main() {
  
    const [activePage, setActivePage] = useState('To Do')

    const [toDoList, setToDoList] = useState([])

    const activeList = toDoList.filter((item) => item.status === activePage)
    
    return (
        <>
            <div className='Main'>
                <div className='buttons'>
                    <button onClick={() => setActivePage('To Do')} style={{background: activePage === "To Do" ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.1)"}}>To Do</button>
                    <button onClick={() => setActivePage('Done')} style={{background: activePage === "Done" ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.1)"}}>Done</button>
                    <button onClick={() => setActivePage('Trash')} style={{background: activePage === "Trash" ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.1)"}}>Trash</button>
                </div>

                <Modal toDoList={toDoList} setToDoList={setToDoList} setActivePage={setActivePage}/>
        
            </div>

            <h2>{activePage}</h2>
            
            {toDoList.length === 0}

            {activeList.map((item) => 
                <ToDo key={item.id} item={item} toDoList={toDoList} setToDoList={setToDoList} activePage={activePage} />
            )}
        </>
  )
}
