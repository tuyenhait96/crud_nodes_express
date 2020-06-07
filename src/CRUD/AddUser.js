import React, { useState } from 'react';
import styled from 'styled-components';
import validateFormLogin from '../validateLogin';

const StyledAdd = styled.form`
    display: grid;
    grid-row-gap: 5px;
    button{
        background-color: cadetblue;
        border: none;
        -webkit-appearance: none;
        border-radius: 4px;
        color: #ffffff;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 1rem;
        padding: 0.75rem 1.25rem;
        margin: 0 0 0.5rem 0;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        line-height: 1;
    }
`

const AddUser = (props) => {
    const [user, setUser] = useState({
        id: null,
        name: '',
        userName: ''
    })

    const [error, setError] = useState({})

    const handleChangeSubmit = (e) =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmitUser = e => {
        e.preventDefault();
        if(!user.name || !user.userName) return;
        setError(
            validateFormLogin(user)
        )
        props.addUser(user)
        setUser({
            id: null,
            name: '',
            userName: ''
        })
    }
    
    return (
        <StyledAdd onSubmit={onSubmitUser}>
            <label>Name</label>
            <input 
                type = 'text' 
                name='name' 
                value={user.name}
                onChange={handleChangeSubmit}
                autoComplete='off'
            />
            <p>{!!error && error.email}</p>
            <label>UserName</label>
            <input 
                type = 'text' 
                name = 'userName' 
                value= {user.userName}
                onChange={handleChangeSubmit}
                autoComplete='off'
            />
            <p>{!!error && error.password}</p>

            <button>Add new user</button>
            
        </StyledAdd>
    );
}

export default AddUser;
