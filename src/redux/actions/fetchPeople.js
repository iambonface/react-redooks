import { FETCH_PEOPLE_SUCCESS } from "../types";
import { SWAPI_API_URL } from "../../constants";
export const fetchApi = () => {
    return dispatch => {
        fetch(`${SWAPI_API_URL}`)
            .then(res => res.json())
            .then(res => res.results)
            .then(people => dispatch(getPeople(people)))
    }

}

export const getPeople = (people) => {
    return {
        type: FETCH_PEOPLE_SUCCESS,
        payload: people
    }
}