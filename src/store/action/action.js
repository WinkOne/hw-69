import axiosDishes from "../../axios-dishes";

export const FETCH_DISH_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_DISH_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_DISH_ERROR = 'FETCH_POST_ERROR';

export const FETCH_GET_DISH = 'FETCH_GET_DISH';
export const FETCH_GET_DISHES = 'FETCH_GET_DISH';
export const FETCH_REMOVE_DISHES = 'FETCH_REMOVE_DISHES';


export const fetchImportDish = (order) => {
    return {type: FETCH_GET_DISHES, order}
};
export const fetchRemoveOrder = (removeOrder) => {
    return {type: FETCH_REMOVE_DISHES, removeOrder}
};



export const fetchDishRequest = () => {
    return {type: FETCH_DISH_REQUEST}
};
export const fetchDishSuccess = (dishes) => {
    return {type: FETCH_DISH_SUCCESS, dishes}
};
export const fetchDishError = () => {
    return {type: FETCH_DISH_ERROR}
};

export const fetchGetDish = () => {
    return dispatch => {
        dispatch(fetchDishRequest());
        axiosDishes.get('/dishes.json').then(response => {
            dispatch(fetchDishSuccess(response.data));
        }, error => {
            dispatch(fetchDishError(error));
        });
    }
};