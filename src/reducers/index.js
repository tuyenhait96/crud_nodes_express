import  { combineReducers} from 'redux';
import productReducer from './productReducer';
import {popupReducer} from './popupReducer';

const rootReducer = combineReducers({
    productReducer,
    popupReducer
});
export default rootReducer;