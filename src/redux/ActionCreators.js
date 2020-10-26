import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { actionTypes } from 'react-redux-form';

export const addComment = (dishId, rating, author, comment) =>({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//Example of a thunk
/**
 /**Returns an function that is going to dispatch or call several actions: dishesLoading and add dishes
 */
export const fetchDishes = () =>(dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

/**Returns an action object */
export const dishesLoading=()=>({
    type: ActionTypes.DISHES_LOADING
});

/**Returns an action object */
export const dishesFailed= (errmess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

/**Returns an action object */
export const addDishes = (dishes) =>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});