import { ActionTypes } from "./Types";
 import { dataCars } from "./placeholderData";

export const loadData = () => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataCars
});