import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_POPUP } from '../data/types';
import * as dataPopups from '../data/popupData';
import PopupDetail from './PopupDetail';
import { closePopupTable } from '../actions/popupAction';

const Bound = styled.div`
    animation: showNoti1 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @keyframes showNoti1 {
        from {
            opacity: 0.5;
            top: 0;
        }
        to {
            opacity: 1;
            top: 50%;
        }
    }
`
const PopupBound = styled.div`
    position:${props => props.activeOverlay ? "absolute" : "unset"};
    left:${props => props.activeOverlay ? "50%" : "unset"};
    top:${props => props.activeOverlay ? "60px" : "unset"};
    transform:${props => props.activeOverlay ? "translate(-50%, -50%)" : "unset"};
    padding: 12px 20px;
    width: ${props => props.widthPopup || "auto"};
    background:${props => props.bgColor};
`
const PopupContainer = (props) => {
    let isMouseClick = false;

    const {popupReducer} = useSelector(state => ({
        popupReducer: state.popupReducer
    }))

    let [content, setContent] = useState(null)
    const dispatch = useDispatch()

    const [style, setStyle] = useState({
        type: '',
        key: '',
        backgroundColor : '',
        widthPopup: ''
    })

    useEffect(() => {
        const {popupkey} = popupReducer
        switch (popupkey) {
            case OPEN_POPUP:
                setStyle({
                    backgroundColor: '#F58232',
                    widthPopup: dataPopups.dataPopup[popupkey].width
                })
                break;
        
            default:
                break;
        }
    }, [popupReducer]);

    useEffect(() => {
        const {data, popupkey} = popupReducer
        switch (popupkey) {
            case OPEN_POPUP:
                content = <PopupDetail data ={data} />
                setContent(content)
                break;
            default:
                break;
        }
        
    }, [popupReducer]);

    const _handleClick = () => {
        if(!isMouseClick){
            dispatch(closePopupTable())
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', _handleClick)
        return () => {
            document.body.removeEventListener('click', _handleClick)
        }
    }, []);

    return (
        <Bound activeOverlay = {popupReducer.activeOverlay} onMouseLeave = {()=>isMouseClick = true} onMouseEnter = {()=>isMouseClick = true}>
            <PopupBound 
                widthPopup= {style.widthPopup}
                bgColor= {style.backgroundColor}
                activeOverlay = {popupReducer.activeOverlay}>
                    {content}
            </PopupBound>
        </Bound>
    );
}

export default React.memo(PopupContainer);