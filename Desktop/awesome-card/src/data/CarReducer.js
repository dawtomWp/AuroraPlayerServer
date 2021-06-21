import { ActionTypes } from "./Types";
import { dataCars } from "./placeholderData";
import { loadData } from "./ActionCreators";

const initialState = {
    cars: []
}

export const CarReducer = (storeData = initialState, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                cars: action.payload
            };
        default:
            return storeData || {}
    }
}

export const loadCarsData = () => async (dispatch, getState) => {
    
    const cars = await fetch(dataCars)
    .then(res => res.json())
    dispatch(loadData(cars))
}