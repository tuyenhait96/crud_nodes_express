import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { openPopupTable } from '../actions/popupAction';
import { OPEN_POPUP } from '../data/types';

const StyledTable = styled.div`
    .table-title{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        border-bottom: 2px solid #dedede;
        .box {
            border-radius: 5px;
            padding: 20px;
            font-size: 150%;
        }
    }
`
const UserTable = props => {
    const dispatch = useDispatch();

    const editRow = (item) => {
        props.editRow(item)
    }

    const onDetail = (i, item) =>{
        dispatch(openPopupTable(OPEN_POPUP, item))
    }
    
    return (
        <StyledTable>
            <div className = 'table-title'>
                <div className="box">Name</div>
                <div className="box">UserName</div>
                <div className="box">Action</div>
            </div>
            {
                props.users.length > 0 ? 
                    props.users.map((item, i) => {
                        return(
                            <div className = 'table-title' key = {i}>
                                <div className="box">{item.name}</div>
                                <div className="box">{item.userName}</div>
                                <div className="box">
                                    <button onClick={()=>editRow(item)}>Edit</button>
                                    <button
                                        onClick={props.isShow ? ()=>{} : ()=>props.deleteUser(item.id)}>Delete</button>
                                    <button onClick = {()=> onDetail(i, item)}>Detail</button>
                                </div>
                            </div>
                        )
                    })
                : <h1>No data</h1>
            }
           
        </StyledTable>
    )
}

export default React.memo(UserTable);