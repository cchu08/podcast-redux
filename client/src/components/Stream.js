import React from 'react';
import { connect } from 'react-redux';

function Stream({ episodes = [] }) {
  return (
    <div>
      {
        episodes.map(episode => <div className="episode" key={episode.id}>{episode.title}</div>)
      }
    </div>
  );
}

function mapStateToProps(state) {
  const episodes = state.episodes;
  return {
    episodes,
  };
}

Stream.propTypes = {
  episodes: React.PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Stream);
