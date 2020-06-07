import { OPEN_POPUP, CLOSE_POPUP } from "../data/types"

const nameInitialState = {
    popupkey: {},
    data: {},
    activeOverlay: false,
    isShow: false
}

export const popupReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case OPEN_POPUP:{
            return {
                ...state,
                isShow: true,
                popupkey: action.popupkey,
                data: action.data,
                activeOverlay: action.activeOverlay,
                typeAction: action.type
            };
        }
        case CLOSE_POPUP:{
            return {
                ...state,
                popupkey: '',
                data: {},
                activeOverlay: false,
                typeAction: '',
                isShow: false
            }
        }
        default:
            return state
    }
}