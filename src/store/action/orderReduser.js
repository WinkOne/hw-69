import {FETCH_GET_DISHES, FETCH_REMOVE_DISHES} from "./action";


const initialState = {
    orderDish: [],
    dishesTotal: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === FETCH_GET_DISHES) {
        let order;
        if(state.orderDish[action.order.name]) {
            order = {...action.order,
                count: state.orderDish[action.order.name].count + 1,
                price: state.orderDish[action.order.name].price + action.order.price
            };
        } else {
            order = {...action.order, count: 1, price: action.order.price}
        }
        const orders = {...state.orderDish, [action.order.name] : order};
        return {
            ...state,
            orderDish: orders,
            dishesTotal: state.dishesTotal + action.order.price
        }
    }
    if (action.type === FETCH_REMOVE_DISHES) {
        let RMorder;
        if(state.orderDish[action.order.name]) {
            RMorder = {...action.order,
                count: state.orderDish[action.order.name].count - 1,
                price: state.orderDish[action.order.name].price - action.order.price
            };
        } else {
            RMorder = {...action.order, count: 1, price: action.order.price}
        }
        const orders = {...state.orderDish, [action.order.name] : RMorder};
        return {
            ...state,
            orderDish: orders,
            dishesTotal: state.dishesTotal - action.order.price
        }
    }

    return state;
};


export default reducer;