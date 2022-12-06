import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <div className="player-wrapper">
      {' '}
      <ReactPlayer width="50%" height="50%" controls={true}></ReactPlayer>;
    </div>
  );
};

export default Video;
