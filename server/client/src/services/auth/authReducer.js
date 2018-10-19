import update from 'immutability-helper';

export default (
  state = {
    user: null
  },
  action
) => {
  switch (action.type) {
    case 'AUTH_REDUCER_FETCH_USER':
      state = update(state, {
        user: { $set: action.payload.user || false }
      });
      break;

    default:
  }
  return state;
};
