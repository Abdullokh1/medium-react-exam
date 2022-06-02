import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../../Data/Data";
import EndPart from "../EndPart/EndPart";
import Navbar from "../Navbar/Navbar";
import Offcanvas from "../../Offcanvas/Offcanvas";
import "../InnerSection/InnerSection.scss";

export default function InnerSection({ isSaved, setSaved, homePublish,userName,lastName }) {
  let [isChosen, setChosen] = useState(false);
  let [showModal, setModal] = useState(false);
  let [claps, setClaps] = useState(7)
  let [isClapped, setClapped] = useState(false)

  let SocialIcons = [
    "bx social-icons bxl-twitter",
    "bx social-icons bxl-facebook-circle",
    "bx social-icons bxl-linkedin-square",
    "bx social-icons bx-copy",
    "bx social-icons bxs-bookmark",
    "bx social-icons bx-dots-horizontal-rounded",
  ];

  const saveHandle = (e) => {
    if (e.target.className === "bx social-icons bxs-bookmark") {
      setChosen(!isChosen);
    }
  };

  const clapHandler = () =>{
    setClapped(!isClapped)
  }

  let location = useLocation();

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <nav className="navbar">
            <Navbar />
          </nav>
        </div>

        <div className="container">
          {data.map((item) => {
            if (item.id === Number(location.pathname.split("/").at(-1))) {
              return (
                <div className="inner" key={item.id}>
                  <div className="d-flex inner__section__part justify-content-between align-items-center mb-5">
                    <div className="d-flex">
                      <img
                        className="inner__img me-3"
                        src={item.userImg}
                        alt={item.userImg}
                        width="50"
                        height="50"
                      />
                      <div>
                        <h4 className="m-0 mb-1 inner__name">
                          {item.userName}
                        </h4>
                        <div className="d-flex">
                          <p className="m-0 me-3 inner__texts">{item.date}.</p>
                          <p className="m-0 inner__texts">3 min read.</p>
                          <button className="bg-transparent inner__btn ms-2 text-danger d-flex align-items-center">
                            <i className="bx me-1 bx-play-circle"></i>
                            Listen
                          </button>
                        </div>
                      </div>
                    </div>
                    <ul className="m-0  p-0 d-flex">
                      {SocialIcons.map((item, i) => {
                        return (
                          <li key={i} className="me-2">
                            <div className=" social-media-btn-wrap">
                              <button
                                onClick={saveHandle}
                                className="bg-transparent"
                              >
                                <i className={item}></i>
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div
                      className={`save-part inner-save-part ${
                        isChosen ? "d-block" : "d-none"
                      }`}
                    >
                      <div className="d-flex flex-column save-wrapper justify-content-start">
                        {isSaved.map((el, i) => {
                          return (
                            <div
                              key={i}
                              className="d-flex check-box-part align-items-center"
                            >
                              <Checkbox defaultChecked color="success" />
                              <label className="m-0">{el.changeName}</label>
                            </div>
                          );
                        })}
                      </div>
                      <button className="bg-transparent text-success mt-2 ps-4 pb-3">
                        Create new list
                      </button>
                    </div>
                  </div>
                  <h2 className="inner__title mb-4">{item.title}</h2>
                  <img
                    className="inner__main-img mb-5"
                    src={item.img}
                    alt={item.name}
                    width="692"
                    height="388"
                  />

                  {item.userInnerInfo.map((item, i) => {
                    return (
                      <div key={i}>
                        <h5 className="mb-4 inner__main__title">
                          {item.textFirst}
                        </h5>
                        <p className="inner__text-info">{item.textSecond}</p>
                        <p className="inner__text-info">{item.textThird}</p>
                      </div>
                    );
                  })}

                  <Offcanvas
                    item={item}
                    showModal={showModal}
                    setModal={setModal}
                  />
                </div>
              );
            }
          })}

          {homePublish.map((item) => {
            if (item.id === Number(location.pathname.split("/").at(-1))) {
              return (
                <div className="container p-5">
                  <div className="d-flex mb-4 justify-content-between inner-info-main align-items-center">
                    <div className="d-flex">
                      <button className="user-btn fs-3 me-3 p-4 d-flex align-items-center justify-content-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pxxgWFt7gjLnC9BqgEIFPPjUxeb8T3EmIg&usqp=CAU"
                          alt="user-img"
                          width={50}
                          height={50}
                        />
                      </button>
                      <div>
                        <h3 className="m-0 inner-info">{userName} {lastName}</h3>
                        <p className="inner-info m-0">May 31 . 17 Stories </p>
                      </div>
                    </div>
                    <ul className="m-0  p-0 d-flex">
                      {SocialIcons.map((item, i) => {
                        return (
                          <li key={i} className="me-2">
                            <div className=" social-media-btn-wrap">
                              <button className="bg-transparent">
                                <i className={item}></i>
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="innerInfo-section mt-5">
                    <h5 className="mb-5">{item.text}</h5>
                    <img
                      src="https://picsum.photos/id/3/692/374"
                      alt="avatar-img"
                      width={692}
                      height={374}
                    />
                  </div>
                </div>
              );
            }
          })}

          <div className="fixed-btns">
            <div className="d-flex align-items-center justify-content-between p-2">
              <button onClick={clapHandler} className="nav-icon-btn">
                <svg
                  width={24}
                  height={24}
                  fill={`${isClapped ? 'yellow': '#888'}`}
                  viewBox="0 0 24 24"
                  aria-label="clap"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"
                  />
                </svg>
              </button>
              <span>{isClapped ? claps+0 : claps-1}</span>

              <button onClick={() => setModal(!showModal)} className="nav-icon-btn" >
                <svg
                  width={24}
                  height={24}
                  fill="#666"
                  viewBox="0 0 24 24"
                  aria-label="responses"
                  className
                >
                  <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z" />
                </svg>
              </button>
              <span>10</span>

              <button className="nav-icon-btn">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                    fill="#666"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <EndPart />
        </div>
      </div>
    </>
  );
}
