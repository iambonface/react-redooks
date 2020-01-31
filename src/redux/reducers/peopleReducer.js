import { FETCH_PEOPLE_SUCCESS } from "../types";

const initialState = {
    people: []
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PEOPLE_SUCCESS:
            return {
                people: action.payload
            }
        default:
            return state
    }

}

export default peopleReducer;