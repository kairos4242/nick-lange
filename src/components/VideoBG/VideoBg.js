import React from "react";
import Source from "./Source";
import PropTypes from "prop-types";

const VideoBg = ({
  wrapperClass,
  videoClass,
  loop = true,
  muted = true,
  autoPlay = true,
  onEnded,
  poster,
  children,
  onPlaying,
  onPlay,
  el: El = "div"
}) => {
  return (
    <El
      className="custom-video-bg-wrapper"
    >
      <video
        className="custom-video-bg"
        loop={loop}
        muted={muted}
        poster={poster}
        autoPlay={autoPlay}
        onEnded={onEnded}
        onPlaying={onPlaying}
        onPlay={onPlay}
      >
        {children}
      </video>
    </El>
  );
};

VideoBg.propTypes = {
  wrapperClass: PropTypes.string,
  videoClass: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  onEnded: PropTypes.func,
  onPlay: PropTypes.func,
  onPlaying: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: Source
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: Source
      })
    )
  ]),
  el: PropTypes.string
};

VideoBg.Source = Source;

export default VideoBg;