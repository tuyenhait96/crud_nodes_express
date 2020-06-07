import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledEdit= styled.form`
    display: grid;
    grid-row-gap: 5px;
    button{
        -webkit-appearance: none;
        border: 1px solid #0366ee;
        border-radius: 4px;
        background: #0366ee;
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
        &:last-child{
            background-color: pink;
            border: none;
        }
    }
`

const EditUser = (props) => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )

    const handleInputChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const onHandleSubmit = e => {
        e.preventDefault();
        props.updateUser(user.id, user)
        props.setIsShow(false)
    }

    const onCancel = () => {
        props.setIsEdit(false)
        props.setIsShow(false)
    }
    return (
        <StyledEdit onSubmit = {onHandleSubmit}>
            <label>Name</label>
            <input 
                type = 'text' 
                name='name' 
                value ={user.name}
                onChange={handleInputChange}
                autoComplete='off'
            />

            <label>UserName</label>
            <input 
                type = 'text' 
                name = 'userName' 
                value ={user.userName}
                onChange={handleInputChange}
                autoComplete='off'
            />
            <button>Update user</button>
            <button onClick={onCancel}>Cancel</button>
        </StyledEdit>
    );
}

export default EditUser;
