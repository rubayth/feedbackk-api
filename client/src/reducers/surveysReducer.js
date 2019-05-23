import { FETCH_SURVEYS_PENDING, FETCH_SURVEYS_SUCCESS, FETCH_SURVEYS_FAILED } from '../actions/types';

const surveyState = {
    surveys: [],
    isPending: true
  }

export default function(state=surveyState, action={}) {
    
    switch(action.type) {
        case FETCH_SURVEYS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case FETCH_SURVEYS_SUCCESS:  
            return Object.assign({}, state, {surveys: action.payload, isPending: false}) 
        case FETCH_SURVEYS_FAILED:
            return Object.assign({}, state, {error: action.payload})        
        default:
            return state;
    }
}