import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS_PENDING, FETCH_SURVEYS_SUCCESS, FETCH_SURVEYS_FAILED } from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({type:FETCH_USER, payload:res.data});
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token)
    dispatch({type:FETCH_USER, payload:res.data});
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({type:FETCH_USER, payload:res.data});
};

export const fetchSurveys = () => async dispatch => {
    dispatch({ type: FETCH_SURVEYS_PENDING })
    try{
        const res = await axios.get('/api/surveys');
        dispatch({ type: FETCH_SURVEYS_SUCCESS, payload:res.data});
    }
    catch(err){
        dispatch({ type: FETCH_SURVEYS_FAILED, payload:err});
    }
}
