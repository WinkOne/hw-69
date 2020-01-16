import {FETCH_DISH_SUCCESS} from "./action/action";


const initialState = {
   dishes: [],
};

const reducer = (state = initialState, action) => {
   if (action.type === FETCH_DISH_SUCCESS) {
      return {...state, dishes: action.dishes}
   }

   return state;
};

export default reducer;