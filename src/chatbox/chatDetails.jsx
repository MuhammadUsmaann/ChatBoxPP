import React from "react";
import Audio from "../chatpopup/audio";
import Img from "../chatpopup/img";
import SendPinPopup from "../chatpopup/sendpinpopup";
import Video from "../chatpopup/Video";
import img1 from "../images/raza2.jpg";
import TextMsg from "../chatpopup/textmsg";

const chatsdetail = [
  {
    id: "1",
    name: "Raza Awan",
  },
  {
    id: "2",
    name: "Raza Awan",
  },
  {
    id: "3",
    name: "Raza Awan",
  },
  {
    id: "4",
    name: "Raza Awan",
  },
  {
    id: "5",
    name: "Raza Awan",
  },
  {
    id: "6",
    name: "Raza Awan",
  },
  {
    id: "7",
    name: "Raza Awan",
  },
  {
    id: "8",
    name: "Raza Awan",
  },
  {
    id: "9",
    name: "Raza Awan",
  },
  {
    id: "10",
    name: "Raza Awan",
  },
  {
    id: "11",
    name: "Raza Awan",
  },
];
const ChatDetails = () => {
  return (
    <div className="web-view">
      <div className="chatdetail-header px-3 py-2 d-flex justify-content-between align-items-center">
        <p>Raza Awan</p>
      </div>
      <div className="chat-detail-body p-3">
        {chatsdetail.map((chatsdetail, index) => {
          return (
            <div
              key={index}
              className="tab-pane fade  chat-detail"
              id={`v-pills-${chatsdetail.id}`}
              role="tabpanel"
              aria-labelledby={`v-pills-${chatsdetail.id}-tab`}
            >
              <TextMsg newMessage="Hello!" sendMsg = {false}/>
              <TextMsg newMessage="Hii"  sendMsg = {true}/>
              <TextMsg newMessage="How're you" sendMsg = {true}/>

              <Img src={img1} text="How i am looking?" sendimg={true} />
              <Img src={img1} text="How i am looking?" sendimg={false} />

              <Video text="Checkout my latest website." sendvideo={true} />
              <Video text="Checkout my latest website." sendvideo={false} />
              
              <Audio sndaudio={true} />
              <Audio sndaudio={false} />
            </div>
          );
        })}
      </div>

      <div className="chat-detail-footer">
        <textarea
          placeholder="Talk to me!"
          className="chatbox"
          name="chatbox"
          minLength="2"
        ></textarea>
        <SendPinPopup />
        <p className="px-3 border-left text-darkgreen">
          <i className="fas fa-location-arrow "></i>
        </p>
      </div>
    </div>
  );
};

export default ChatDetails;
