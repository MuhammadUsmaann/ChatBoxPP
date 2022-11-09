import React from "react";

const TextMsg = (props) => {
  const { sendMsg, newMessage } = props;
  return (
    <>
      {sendMsg ? (
        <div className="send-mesg-main">
          <p className="send-mesg">{newMessage}</p>
        </div>
      ) : (
        <div className="rcv-mesg-main">
          <p className="rcv-mesg">{newMessage}</p>
        </div>
      )}
    </>
  );
};

export default TextMsg;
