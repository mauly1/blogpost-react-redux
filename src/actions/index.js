import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export  const fetchPostsAndUsers =()=>async (dispatch,getState) =>{
    console.log('------- About to fetch Posts Api--------')
    await dispatch(fetchPosts())

    const userIds=_.uniq(_.map(getState().posts,'userId'));

    console.log('<<<<<<<<<<<<<<<<<-------  fetched Posts Api-------->>',userIds)
    userIds.forEach(id=>dispatch(fetchUser(id)))

}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data});
};


/* //use of memoize to make a uniq calls
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
})
*/

export const fetchUser = id => async dispatch =>
{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};
