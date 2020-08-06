import * as actionTypes from './type';


export const updatefirstName = firstName =>{
    return{
        type: actionTypes.SET_FIRSTNAME,
        payload:{
            firstName: firstName
        }
    }
}

export const updatelastName = lastName =>{
    return{
        type: actionTypes.SET_LASTNAME,
        payload:{
            lastName: lastName
        }
    }
}

export const updateEmail = email =>{
    return{
        type: actionTypes.SET_EMAIL,
        payload:{
            email: email
        }
    }
}

export const updatePassword = password =>{
    return{
        type: actionTypes.SET_PASSWORD,
        payload:{
            password: password
        }
    }
}