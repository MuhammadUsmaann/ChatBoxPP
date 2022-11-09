import React from "react";

const Audio = (props) => {
  const { audiosrc, sndaudio } = props;
  return (
    <>
      {sndaudio ? (
        <div className="d-flex justify-content-end">
          <div className="send-audio-main">
            <audio controls>
              <source src="horse.ogg" type="audio/ogg" />
            </audio>
          </div>
        </div>
      ) : (
        <div className="rcv-audio-main">
          <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
          </audio>
        </div>
      )}
    </>
  );
};

export default Audio;
