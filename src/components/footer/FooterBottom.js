import React from "react";

const FooterBottom = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-10 ">
      <p className="text-center text-white text-base">
        © {year}. All rights reserved by Muhammad Dilshad
      </p>
    </footer>
  );
};

export default FooterBottom;
