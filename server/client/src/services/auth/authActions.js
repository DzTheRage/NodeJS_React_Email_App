import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const user = await axios.get('/api/current_user');
  dispatch({
    type: 'AUTH_REDUCER_FETCH_USER',
    payload: {
      user: user.data
    }
  });
};

export const handleToken = token => async dispatch => {
  const user = await axios.post('/api/stripe', token);

  dispatch({
    type: 'AUTH_REDUCER_FETCH_USER',
    payload: {
      user: user.data
    }
  });
};
