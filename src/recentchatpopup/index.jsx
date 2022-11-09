import React from "react";
import RecentChats from "../chatbox/recentChats";
const RecentChatpopup = () => {
  return (
    <>
      <div id="recentchatpopup">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className=" popup-btn chaticon"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog custom-m-main m-0 rounded-0"
            role="document"
          >
            <div className="modal-content position-relative">
              <div className="modal-header custom-m-header">
                <div className="d-flex align-items-start ml-2 flex-column">
                  <h5 className="modal-title " id="exampleModalLabel">
                    Raza Awan
                  </h5>
                  <p>Messaging</p>
                </div>

                <button
                  type="button"
                  className="close text-white"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body custom-m-body p-0">
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
                <RecentChats/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentChatpopup;
