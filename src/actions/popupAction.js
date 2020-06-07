import * as types from '../data/types';

export const openPopupTable = (popupkey, data, activeOverlay=false) => dispatch => {
    dispatch({
        type: types.CLOSE_POPUP
    })

    dispatch({
        type: types.OPEN_POPUP,
        popupkey,
        data,
        activeOverlay
    })
}

export const closePopupTable = () => dispatch =>{
    dispatch({
        type: types.CLOSE_POPUP
    })
}