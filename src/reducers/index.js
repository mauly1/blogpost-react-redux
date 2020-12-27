import {combineReducers} from 'redux';
import postsRedcuer from "./postsRedcuer";
import usersReducer from "./usersReducer";

export default combineReducers({
    posts: postsRedcuer,
    users:usersReducer
});
