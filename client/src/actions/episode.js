import * as actionTypes from '../constants/actionTypes';

function setEpisodes(episodes) {
  return {
    type: actionTypes.EPISODES_SET,
    episodes,
  };
}


export default setEpisodes;
