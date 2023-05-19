import React, { useState } from 'react'
import nonchecked from './Images/Nonchecked.png';
import menu from './Images/Button.png';
import checkIt from './Images/Checked mark.png';
import trash from './Images/TrashBin.png';
import vector from './Images/Vector.png';

export default function SingleToDo ({ item, toDoList, setToDoList, activePage }) {
    
    const changeStatusToToDo = (id) => {
        const itemToToDo = toDoList.find((item) => item.id === id)
        itemToToDo.status = 'To Do'
        const toDoToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...toDoToDoList, itemToToDo])
    }

    const changeStatusToDone = (id) => {
        const itemToDone = toDoList.find((item) => item.id === id)
        itemToDone.status = 'Done'
        const doneToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...doneToDoList, itemToDone])
    }

    const changeStatusToTrash = (id) => {
        const itemToTrash = toDoList.find((item) => item.id === id)
        itemToTrash.status = 'Trash'
        const trashToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...trashToDoList, itemToTrash])
    }

    const [isModalActive, setIsModalActive] = useState(false)
    const toggleModal = () => {
        setIsModalActive(!isModalActive)
    }

    const [isToDoModalActive, setIsToDoModalActive] = useState(false)
    const toggleToDoModal = () => {
        setIsToDoModalActive(!isModalActive)
    }

    const changeText = () => {
        if (activePage === 'To Do' || activePage === 'Done') {
            return 'Move To Trash'
        } else {
            return 'Delete Forever'
        }
    }

    const changeAction = () => {
        if (activePage === 'To Do') {
            changeStatusToDone(item.id)
        } else {
            toggleModal()
        }
    }

    const deleteForever = (id) => {
        const toDoToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...toDoToDoList])
    }
    
    return (
        <>
            <div className='onetodo'> 
                <img src={menu} className='icon-click' onClick={ activePage === 'To Do' ? toggleToDoModal : toggleModal} />
                <img src={item.status === 'Done' ? checkIt : nonchecked} className='icon' onClick={() => changeAction()}/>
                <p className={item.status === 'Done' ? 'inter500-16-line' : 'greetings'}>{item.text}</p>
            </div> 

            {isToDoModalActive && (
                    <div className="list-todo">
                        <div>
                            <div className="settings">
                               <div className='settings2' onClick={() => changeStatusToTrash(item.id)}>
                                    <img src={trash} className='icon'/>
                                    <p className='inter500'> Move To Trash</p>
                               </div>
                            </div>
                        </div>
                    </div>)}

            {isModalActive && (
                    <div className="list">
                        <div>
                            <div className="settings">
                               <div className='settings2' onClick={activePage === 'Trash' ? () => deleteForever(item.id) : () => changeStatusToTrash(item.id)}>
                                    <img src={trash} className='icon'/>
                                    <p className='inter500'>{changeText()}</p>
                               </div>
                               <div className='settings2' onClick={() => changeStatusToToDo(item.id)}>
                                    <img src={vector} className='icon'/>
                                    <p className='inter500'>Move Back To To Do</p>
                               </div>
                            </div>
                        </div>
                    </div>)}
        </>
    )
}