import React from "react";

const ChatboxHeader = () => {
  return (
    <div className="chatbox-header ">
      <div className="d-flex justify-content-between align-items-center px-3 py-2 myinfo">
        <p>My name</p>
      </div>
      <div className="chatbox-header-searchbar px-3 py-1">
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            placeholder="Search or start a new chat"
            className=""
          />
          <i className="fa-solid fa-magnifying-glass cr-p"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatboxHeader;
