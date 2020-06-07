import React, { useState } from 'react';
import styled from 'styled-components';
import AddUser from './CRUD/AddUser';
import EditUser from './CRUD/EditUser';
import UserTable from './CRUD/UserTable';
import PopupContainer from './Popup/PopupContainer';
import { useSelector } from 'react-redux';
import { OPEN_POPUP } from './data/types';

const Bound= styled.div`
    padding: 0 5px;
    .flex-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .flex-large{
            flex: 1 1 0;
            margin-bottom: 0;
            padding: 0 1rem;
        }
    }
`

const  CRUDHook = () => {
    const {popupReducer} = useSelector(state => ({
        popupReducer: state.popupReducer
    }))   

    const userData = [
        {
            id: 1,
            name: 'Tuyen',
            userName: 'Ha Tuyen'
        }
    ]

    const [users, setUsers] = useState(userData);
    const [isEdit, setIsEdit] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [currentUser, setCurrentUser] = useState({
        id: null,
        name: '',
        userName: ''
    })
    
    // Add User
    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setUsers(users.filter(item=> item.id !== id))
    }

    const editRow = (user) => {
        setIsEdit(true)
        setIsShow(true)
        setCurrentUser({id: user.id, name: user.name, userName: user.userName})
    }

    const updateUser = (id, updateUser) => {
        setIsEdit(false)
        setUsers(users.map(user=> user.id === id ? updateUser : user))
    }

    const onDetail = (id, user) => {
        console.log(id, user)
    }
    return (
        <Bound>
            <h1>CRUD with app</h1>
            <div className = 'flex-wrap'>
                <div className = 'flex-large'>
                    {
                        isEdit ? 
                        <div>
                            <h1>Edit User</h1>
                            <EditUser
                                edit = {isEdit}
                                currentUser = {currentUser}
                                setIsEdit={setIsEdit}
                                setIsShow={setIsShow}
                                updateUser={updateUser}
                            />
                        </div>
                        :
                        <div>
                            <h1>Add User</h1>
                            <AddUser addUser = {addUser}/>
                        </div>
                    }
                </div>
                <div className = 'flex-large'>
                    <h1>View Table</h1>
                    <UserTable 
                        onDetail ={onDetail}
                        users = {users} 
                        deleteUser = {deleteUser}
                        setIsEdit = {setIsEdit}
                        isShow={isShow}
                        editRow = {editRow}/>
                </div>
            </div>
            {
                popupReducer.isShow && popupReducer.popupkey && popupReducer.typeAction === OPEN_POPUP &&
                <PopupContainer/>
            }
        </Bound>
    );
}

export default React.memo(CRUDHook);
