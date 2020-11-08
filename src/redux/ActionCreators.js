import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';

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

    return fetch(baseUrl+'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
    
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/
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


//Example of a thunk
/**
 /**Returns an function that is going to dispatch or call several actions: dishesLoading and add dishes
 */
export const fetchComments = () =>(dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl+'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/
}


/**Returns an action object */
export const commentsFailed= (errmess)=>({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

/**Returns an action object */
export const addComments = (comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



///////////


//Example of a thunk
/**
 /**Returns an function that is going to dispatch or call several actions: dishesLoading and add dishes
 */
export const fetchPromos = () =>(dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl+'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/
}

/**Returns an action object */
export const promosLoading=()=>({
    type: ActionTypes.PROMOS_LOADING
});

/**Returns an action object */
export const promosFailed= (errmess)=>({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

/**Returns an action object */
export const addPromos = (promos) =>({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});