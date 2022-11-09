import React from "react";
import Img from "./img";
import SendPinPopup from "./sendpinpopup";
import img1 from '../images/raza2.jpg'
import Video from "./Video";
import Audio from "./audio";
import TextMsg from "./textmsg";
const Chatpopup = () => {
  return (
    <>
      <div >
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
          <div className="modal-dialog custom-m-main m-0 rounded-0" role="document">
            <div className="modal-content position-relative">
              <div className="modal-header custom-m-header">
                <div className="d-flex align-items-center">
                  {/* <img
                    src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
                    alt=""
                    className="m-header-img"
                  /> */}
                  <h5 className="modal-title ml-2" id="exampleModalLabel">
                    Raza Awan
                  </h5>
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
              <div className="modal-body custom-m-body">
                <TextMsg newMessage="Hello!" />
                <TextMsg newMessage="Hii" />
                <TextMsg newMessage="How're you" />

                <Img src = {img1} text ="How i am looking?" sendimg = {true}/>
                <Img src = {img1} text ="How i am looking?" sendimg = {false}/>

                <Video text = "Checkout my latest website." sendvideo = {true}/>
                <Video text = "Checkout my latest website." sendvideo = {false}/>
                <Audio sndaudio = {true}/>
                <Audio sndaudio = {false}/>

              </div>

              <div className="modal-footer custom-m-footer">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatpopup;
