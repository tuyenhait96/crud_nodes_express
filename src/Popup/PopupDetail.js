import React, { useEffect }  from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { closePopupTable } from '../actions/popupAction';

const Bound= styled.div`
`

const  PopupDetail = props => {
    const {data} = props
    const dispatch = useDispatch()
    return (
        <Bound>
            {data.id} <br/>
            {data.name} <br/>
            {data.userName} <br/>
            <button onClick={()=>dispatch(closePopupTable())}>Close</button>
        </Bound>
    )
}

export default React.memo(PopupDetail);