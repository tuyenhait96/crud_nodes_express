import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBound = styled.div`
position: relative;
    div{
        width: 100px;
        background: silver;
        text-align: center;
    }
    div.lstDropdown{
        margin-top: 10px;
        background: aqua;
    }
`
const DropdownControl= props => {
    const {dropDownType, dropDownData} = props
    let isMouseClick = false;
    const [active, setActive] = useState(dropDownType.MUSIC)
    const [isDropDown, setIsDropdown] = useState(false)

    const _handleClick = () =>{
        if(!isMouseClick)
            setIsDropdown(false)
    }

    useEffect(() => {
        document.addEventListener('click', _handleClick);
        return () => {                                                                                                                                       
            document.removeEventListener('click', _handleClick);
        }
    }, [isDropDown]);

    const onClickItem = (item) =>{
        setActive(item)
        setIsDropdown(false)

        console.log('item', item)
    }
    return (
        <StyledBound onMouseEnter={()=>isMouseClick=true} onMouseLeave={()=>isMouseClick=false}>
            <div onClick={()=>setIsDropdown(!isDropDown)}>{active}</div>
            {
                isDropDown &&
                Object.keys(dropDownData).map((item, i) =>
                    <div 
                        key={i}
                        className='lstDropdown'
                        onClick={()=>onClickItem(item)}
                        style={{backgroundColor: active=== item ? '#0075FF' : 'unset'}}
                    >
                        {item}
                    </div>
                )
            }
        </StyledBound>
    );
}

export default React.memo(DropdownControl);