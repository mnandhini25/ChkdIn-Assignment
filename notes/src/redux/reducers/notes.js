import {GET_NOTES, UPDATE_NOTE, DELETE_NOTE, EDIT_NOTE} from '../../constants/actions';

const initState = {
    noteList : [{
        features: "Petrol",
        desc: "15Km/Per Liter",
        category: "Luxury",
        id:1,
        catId:1001,
        isEditHeader: false,
        isContentEdit: false
    },{
        features: "Diesel",
        desc: "25Km/Per Liter",
        category: "Luxury",
        id:2,
        catId:1001,
        isEditHeader: false,
        isContentEdit: false
    },{
        features: "Petrol",
        desc: "25Km/Per Liter",
        category: "Economy",
        id:3,
        catId:1003,
        isEditHeader: false,
        isContentEdit: false
    },{
        features: "Diesel",
        desc: "28Km/Per Liter",
        category: "Economy",
        id:4,
        catId:1003,
        isEditHeader: false,
        isContentEdit: false
    },{
        features: "Diesel",
        desc: "15Km/Per Liter",
        category: "Commercial",
        id:5,
        catId:1002,
        isEditHeader: false,
        isContentEdit: false
    }],
    categoryList:[{
        catId: 1001,
        name:"Luxury"
    },{
        catId: 1002,
        name:"Commercial"
    },{
        catId: 1003,
        name:"Economy"
    }]
}

const notesReducer = (state=initState, action) =>{
    switch(action.type) {
        case GET_NOTES :{
            return {...state}
        }

        case EDIT_NOTE:{
            return{...state, noteList: action.payload}
        }
        default :{
            return { ...state}
        }
    }

}

export default notesReducer;