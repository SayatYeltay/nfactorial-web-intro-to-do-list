import { useState } from "react"
import './Modal.css'
import { v4 as uuidv4 } from 'uuid'


export default function Modal({ toDoList, setToDoList }) {
    
    const [isModalActive, setIsModalActive] = useState(false)
    const [newToDo, setNewToDo] = useState('');

    const toggleModal = () => {
        setIsModalActive(!isModalActive)
    }

    const handleClick = () => {
        setToDoList([...toDoList, { text: newToDo, id: uuidv4(), status: 'To Do' }])
        setNewToDo('')
    }

    return (
        <div>
            <button onClick={toggleModal} className='button-plus'>+</button>

            {isModalActive && (
                <div className="main">
                    <div>
                        <div className="main-content">
                            <p className="modal-title">Add New To Do</p>
                            <textarea 
                                placeholder={'Please text your task'} 
                                onChange={(e) => setNewToDo(e.target.value)} 
                                className="modal-text"
                                value={newToDo}
                            ></textarea>
                            <button className="add-btn" onClick={handleClick}>Add</button>
                        </div>
                    </div>
                </div>)}
            
        </div>
    )
}