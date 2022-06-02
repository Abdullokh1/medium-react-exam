import React, { useState } from "react";
import '../Home/InnerSection/InnerSection.scss'
import "./Offcanvas.scss";
import ReplySection from "./ReplySection/ReplySection";


export default function Offcanvas({ showModal, setModal, item }) {

  let [offcanvaData, setOffCanvaData] = useState(item.commentArr);
  let [emptyString, setString] = useState("");

  const addCommentHandle = (e) => {
    setString(e.target.value);
  };

  const addCommentInfoHandler = () => {
    setOffCanvaData([
      ...offcanvaData,
      {
        commentUserName: "Abdullokh Giyasov",
        commentDesc: emptyString,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pxxgWFt7gjLnC9BqgEIFPPjUxeb8T3EmIg&usqp=CAU",
      },
    ]);

    setString("");
  };


  

  return (
    <>
      <div className={`${showModal ? "backdrop-offcanva" : ""}`}>
        <div className={`offcanvas-part p-4 ${showModal ? "" : "hide"}`}>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h3 className="fs-4">Responses</h3>
            </div>
            <div>
              <i className="bx offcanva-icons bx-check-shield"></i>
              <button
                className="close-modal-btn"
                onClick={() => setModal(!showModal)}
              >
                <i className="bx offcanva-icons bx-x"></i>
              </button>
            </div>
          </div>
          <div className="inner-offcanva mt-4 p-3">
            <div className="d-flex align-items-center">
              <button>
                <img
                  className="user-avatar-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pxxgWFt7gjLnC9BqgEIFPPjUxeb8T3EmIg&usqp=CAU"
                  width="40"
                  height="40"
                />
              </button>
              <h3 className="fs-6 m-0 ms-3">Abdullokh Giyasov</h3>
            </div>

            <textarea
              onChange={addCommentHandle}
              value={emptyString}
              className="inner-offcanva mt-3 offcanva-textarea"
              cols="25"
              rows="10"
              placeholder="What are your thoughts"
            ></textarea>

            <div className="d-flex flex-column  h-50">
              <div className="d-flex mt-4 justify-content-between">
                <div>
                  <svg fill="#888" width={21} height={21}>
                    <path
                      d="M10.3 18H4.4l.1-.9.8-.12c.55-.11.78-.23.78-.45V5.37c0-.22-.11-.34-.9-.45H4.5l-.11-.9h6.25c4.02 0 5.58 1.24 5.58 3.14 0 1.9-1.78 3.12-3.79 3.46v.11c2.7.34 4.25 1.56 4.25 3.57 0 2.35-2 3.7-6.37 3.7h.02-.02zM9.98 5.02h-1v5.47h1.23c1.79 0 2.79-1.23 2.79-2.68 0-1.69-1-2.8-3-2.8v.01zm-.22 6.36h-.78V17l1.22.22h.22c1.67 0 3.01-1 3.01-2.8 0-2.11-1.56-3-3.69-3h.02z"
                      fillRule="evenodd"
                    />
                  </svg>

                  <svg width={21} fill="#888" height={21}>
                    <path
                      d="M9.85 18.04c-.54 0-2.03-.64-1.92-.85L9.95 9.5l-.64-.22-1.38 1.5-.43-.43c.53-1.17 1.7-2.67 2.77-2.67.54 0 2.24.54 2.14.86l-2.14 7.78.54.22 1.6-1.07.42.43c-.64 1.06-1.92 2.13-2.98 2.13zm2.34-11.73c-.96 0-1.38-.64-1.38-1.39 0-1.07.74-1.92 1.49-1.92.85 0 1.39.64 1.39 1.5-.11 1.06-.75 1.8-1.5 1.8z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <button className="bg-transparent me-3">Cancel</button>

                  <button
                    onClick={addCommentInfoHandler}
                    className="offcanva-respont-btn"
                  >
                    Respond
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <ul className="m-0 p-0 mt-5 pb-4 offcanva-user-list">
            {offcanvaData.map((el, i) =>{
              return (
                <ReplySection 
                  el={el}
                  key={i}
                  offcanvaData={offcanvaData} 
                  emptyString={emptyString}
                  addCommentHandle={addCommentHandle}
                  addCommentInfoHandler={addCommentInfoHandler}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
