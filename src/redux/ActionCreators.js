import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log('Post comments ', error.message);
        alert('Comment could not be posted: ' + error.message);
    });
    
}
//Example of a thunk
/**
/**Returns an function that is going to dispatch or call several actions: dishesLoading and add dishes
*/
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    
    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
    
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/
}

/**Returns an action object */
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

/**Returns an action object */
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

/**Returns an action object */
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


//Example of a thunk
/**
/**Returns an function that is going to dispatch or call several actions: dishesLoading and add dishes
*/
export const fetchComments = () => (dispatch) => {
    dispatch(dishesLoading(true));
    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/
}


/**Returns an action object */
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

/**Returns an action object */
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


///////////


//Example of a thunk
/**
/**Returns an function that is going to dispatch or call several actions: dishesLoading and add dishes
*/
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    
    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/
}

/**Returns an action object */
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

/**Returns an action object */
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

/**Returns an action object */
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
///////////


//Example of a thunk
/**
/**Returns an function that is going to dispatch or call several actions: dishesLoading and add dishes
*/
export const fetchLeaders = () => (dispatch) => {
    dispatch(promosLoading(true));
    
    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/
}

/**Returns an action object */
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

/**Returns an action object */
export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

/**Returns an action object */
export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});


//////


export const postFeedback = (feedback) => (dispatch) => {
    const newFeedback = {
        feedbackId: feedback.feedbackId,
        firstname: feedback.firstname,
        lastname: feedback.lastname,
        telnum: feedback.telnum,
        email: feedback.email,
        agree: feedback.agree,
        contactType: feedback.contactType,
        message: feedback.message
    }
    
    
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error => {
        console.log('Post comments ', error.message);
        alert('Comment could not be posted: ' + error.message);
    });
    
}