import axios from 'axios';
import { FETCH_USER } from './types';

// action to fetchUser
export const fetchUser = () => async dispatch => {
    // response header return by axios GET call
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

// Another way around
// export const fetchUser = () => async dispatch({type: FETCH_USER, payload: await axios.get('/api/current_user')});
