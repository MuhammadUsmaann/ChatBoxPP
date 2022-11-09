import React, { useState } from "react";
import img1 from "../images/raza2.jpg";

const Img = (props) => {
  const { imgsrc, text, sendimg } = props;
  const [fullsview, setfullsview] = useState(false);
  return (
    <>
      {sendimg ? (
        <div className="d-flex justify-content-end">
          <div className={`send-img-main ${fullsview ? "fullview-img" : ""}`}>
            <img
              src={img1}
              alt="img"
              onClick={() => setfullsview(!fullsview)}
            />
            <p className="px-2 py-1">{text}</p>
          </div>
        </div>
      ) : (
        <div className={`rcv-img-main ${fullsview ? "fullview-img" : ""}`}>
          <img src={img1} alt="img" />
          <p className="px-2 py-1">{text}</p>
        </div>
      )}
      
    </>
  );
};

export default Img;
