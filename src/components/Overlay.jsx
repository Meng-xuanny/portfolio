import React from "react";

const Overlay = ({ setIsoverlay }) => {
  return (
    <>
      <div className="modal">
        <button className="close-modal" onClick={() => setIsoverlay(false)}>
          &times;
        </button>
        <h1>Hi there! 😍</h1>
        <p>
          I hope you are having a great time browsing my sites!
          <br /> My name is Mengxuan Liang and I'm a web developer who has a
          passion for learning. I'm open for developing work & collaboration!
        </p>
        <a href="mailto:liangmengxuan1123@gmail.com" className="emaillink">
          Send me an email
        </a>
      </div>
      <div className="overlay "></div>
    </>
  );
};

export default Overlay;
