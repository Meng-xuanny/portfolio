import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        copyright &copy; Mengxuan Liang
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
