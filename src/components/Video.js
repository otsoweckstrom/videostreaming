import ReactPlayer from 'react-player';
import video1 from './Dancin.mp4';

const Video = () => {
  return (
    <div className="player-wrapper">
      {' '}
      <ReactPlayer
        url={video1}
        width="50%"
        height="50%"
        controls={true}
      ></ReactPlayer>
      ;
    </div>
  );
};

export default Video;
