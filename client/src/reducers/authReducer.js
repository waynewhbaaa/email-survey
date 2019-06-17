import { FETCH_USER } from '../actions/types';

// While waiting we should return null
export default function(state = null, action) {

  switch(action.type) {
    case FETCH_USER:
      return action.payload || false ;
    default:
      return state;
  }
}
