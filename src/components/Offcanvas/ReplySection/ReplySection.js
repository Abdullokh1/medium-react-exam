import React, { useState } from "react";
import "./ReplySection.scss";
export default function ReplySection({ el }) {
  let [addReply, setAddReply] = useState([]);
  let [fillComment, setFillComment] = useState("");

  let [isReplied, setReply] = useState(false);

  const ReplyChangeHandler = (e) => {
    setFillComment(e.target.value);
  };

  const replyComment = () => {
    setReply(!isReplied);

    setAddReply([
      {
        commentDesc: fillComment,
      },
      ...addReply,
    ]);
    setFillComment("");
  };


  return (
    <>
      <li key={el.id} className="mb-4 offcanva-user-items">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <img
              className="offcanva-img me-3"
              src={el.img}
              alt="img"
              width={32}
              height={32}
            />
            <div>
              <h5 className="m-0 offcanva-user-info">{el.commentUserName}</h5>
              <p className="m-0 offcanva-user-info light-gray">
                {el.commentDate}
              </p>
            </div>
          </div>
          <button className="bg-transparent">
            <i className="bx fs-4 bx-dots-horizontal-rounded"></i>
          </button>
        </div>
        <p className="mt-3 user-info-desc">{el.commentDesc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center mt-4">
            <div className="me-3">
              <svg width={24} height={24} viewBox="0 0 24 24" aria-label="clap">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                />
              </svg>

              <span>{el.commentClaps}</span>
            </div>

            <svg
              width={29}
              height={29}
              className="bk bj zi"
              aria-label="responses"
            >
              <path d="M21.27 20.06a9.04 9.04 0 0 0 2.75-6.68C24.02 8.21 19.67 4 14.1 4S4 8.21 4 13.38c0 5.18 4.53 9.39 10.1 9.39 1 0 2-.14 2.95-.41.28.25.6.49.92.7a7.46 7.46 0 0 0 4.19 1.3c.27 0 .5-.13.6-.35a.63.63 0 0 0-.05-.65 8.08 8.08 0 0 1-1.29-2.58 5.42 5.42 0 0 1-.15-.75zm-3.85 1.32l-.08-.28-.4.12a9.72 9.72 0 0 1-2.84.43c-4.96 0-9-3.71-9-8.27 0-4.55 4.04-8.26 9-8.26 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32a5.59 5.59 0 0 0 .21 1.29c.19.7.49 1.4.89 2.08a6.43 6.43 0 0 1-2.67-1.06c-.34-.22-.88-.48-1.16-.74z" />
            </svg>

            <p className="user-info-desc m-0">Hide replies</p>
          </div>

          <button
            onClick={() => setReply(!isReplied)}
            className="bg-transparent"
          >
            Reply
          </button>
        </div>

        <div className={isReplied ? "d-block reply-box" : "d-none"}>
          <textarea
            className="inner-offcanva reply-input mt-3 offcanva-textarea"
            cols="25"
            onChange={ReplyChangeHandler}
            rows="10"
            value={fillComment}
            placeholder={`Replying to ${el.commentUserName}`}
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
                <button
                  onClick={() => setReply(!isReplied)}
                  className="bg-transparent me-3"
                >
                  Cancel
                </button>

                <button onClick={replyComment} className="offcanva-respont-btn">
                  Respond
                </button>
              </div>
            </div>
          </div>
        </div>
        {addReply.map((item) => {
          return (
            <>
              <div className="reply-comment-box ">
                <div className="d-flex justify-content-between mt-4 align-items-center">
                  <div className="d-flex align-items-center">
                    <button className="me-3">
                      <img
                        className="user-avatar-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pxxgWFt7gjLnC9BqgEIFPPjUxeb8T3EmIg&usqp=CAU"
                        width="35"
                        height="35"
                      />
                    </button>
                    <div>
                      <h5 className="reply-user-name m-0">Abdullokh Giyasov</h5>
                      <p className="m-0 reply-user-name text-bold">
                        less than a minute
                      </p>
                    </div>
                    <p className="reply-user-avatar">You</p>
                  </div>
                  <i class="bx fs-4 bx-dots-horizontal-rounded"></i>
                </div>
                <h4 className="fs-6 mt-4">{item.commentDesc}</h4>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center mt-4">
                    <div className="me-3">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        aria-label="clap"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                        />
                      </svg>

                      <span></span>
                    </div>

                    <svg
                      width={29}
                      height={29}
                      className="bk bj zi"
                      aria-label="responses"
                    >
                      <path d="M21.27 20.06a9.04 9.04 0 0 0 2.75-6.68C24.02 8.21 19.67 4 14.1 4S4 8.21 4 13.38c0 5.18 4.53 9.39 10.1 9.39 1 0 2-.14 2.95-.41.28.25.6.49.92.7a7.46 7.46 0 0 0 4.19 1.3c.27 0 .5-.13.6-.35a.63.63 0 0 0-.05-.65 8.08 8.08 0 0 1-1.29-2.58 5.42 5.42 0 0 1-.15-.75zm-3.85 1.32l-.08-.28-.4.12a9.72 9.72 0 0 1-2.84.43c-4.96 0-9-3.71-9-8.27 0-4.55 4.04-8.26 9-8.26 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32a5.59 5.59 0 0 0 .21 1.29c.19.7.49 1.4.89 2.08a6.43 6.43 0 0 1-2.67-1.06c-.34-.22-.88-.48-1.16-.74z" />
                    </svg>

                    <p className="user-info-desc m-0">1 reply</p>
                  </div>

                  <button onClick={() => setReply(!isReplied)} className="bg-transparent">
                    Reply
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </li>
    </>
  );
}
