import React from 'react';

function Stream({ episodes = [] }) {
  return (
    <div>
      {
        episodes.map(episode => <div className="episode" key={episode.id}>{episode.title}</div>)
      }
    </div>
  );
}
Stream.propTypes = {
  episodes: React.PropTypes.arrayOf.isRequired,
};

export default Stream;
