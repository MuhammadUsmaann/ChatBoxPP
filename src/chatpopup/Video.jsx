import React from "react";
import video from "../images/trackingsystem-1.webm";

const Video = (props) => {
  const { videosrc, text, sendvideo } = props;
  return (
    
    <>
      {sendvideo ? (
        <div className="d-flex justify-content-end">
          <div className="send-video-main">
            <video controls>
              <source src={video} type="video/mp4" />
            </video>
            <p className="px-2 pb-1">{text}</p>
          </div>
        </div>
      ) : (
        <div className="rcv-video-main">
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
          <p className="px-2 pb-1">{text}</p>
        </div>
      )}
      
    </>
  );
};

export default Video;
