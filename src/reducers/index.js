import {combineReducers} from 'redux';
import * as actionTypes from '../action/type';

const initialValueState={
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const setReducer=(state= initialValueState, action)=>{
    switch(action.type){
        case actionTypes.SET_FIRSTNAME:
            return{
                ...state,
                firstName: action.payload.firstName
            };
        case actionTypes.SET_LASTNAME:
            return{
                ...state,
                lastName: action.payload.lastName
            };
        case actionTypes.SET_EMAIL:
            return{
                ...state,
                email: action.payload.email
            };
        case actionTypes.SET_PASSWORD:
            return{
                ...state,
                password: action.payload.password
            };
        default:
            return state;
    }
}


const allReducers= combineReducers({
    user: setReducer
});

export default allReducers;