import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as reduxForm} from 'redux-form';
import surveysReducer from './surveyReducer';
export default combineReducers({
    auth:authReducer,
    form:reduxForm,
    surveys: surveysReducer

})