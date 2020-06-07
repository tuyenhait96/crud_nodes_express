import React from 'react';
import Form from './Form';
import CRUDHook from './CRUDHook';
import DropdownControl from './DropdownControl';
import styled from 'styled-components';

export const dropDownType = {
  MUSIC: 'MUSIC',
  GAME: 'GAME'
}

export const dropDownData = {
  [dropDownType.MUSIC]: {
      name:' Music'
  },
  [dropDownType.GAME]: {
      name:' Game'
  },
}

const Cover= styled.div`
  display: flex;
  form, div {
    flex: 1;
  }
`

function App() {
  return (
    <>
    <Cover>
      <Form/>
      <DropdownControl dropDownType = {dropDownType} dropDownData={dropDownData}/>
    </Cover>
      <CRUDHook/>
    </>
  );
}

export default React.memo(App);
