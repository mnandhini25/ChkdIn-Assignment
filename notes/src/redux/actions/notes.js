import {GET_NOTES,UPDATE_NOTE,DELETE_NOTE, EDIT_NOTE} from '../../constants/actions';
export const getNotes = () => {
    
    return {type: GET_NOTES}
}

export const editNote = (newList) => {
    
    return {type:EDIT_NOTE, payload: newList}

}

// export const addCustomer = (data) =>{
//     return {type: ADD_CUSTOMER, payload: data}
// }

// export const updateCustomer = (data) =>{
    
//     return {type: UPDATE_CUSTOMER, payload: data}
// }

