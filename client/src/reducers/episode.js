import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function setEpisodes(state, action) {
  const { episodes } = action;
  return [...state, ...episodes];
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.EPISODES_SET:
      return setEpisodes(state, action);
    default:
  }
  return state;
}

