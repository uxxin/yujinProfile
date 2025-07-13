import React from "react";
import "../assets/style.css";

const Introduction = () => {
  return (
    <div>
      <div>
        <div className="introduction">
          <div className="oneline">
            <h1>안녕하세요,</h1>
            <p>
              사용자의 입장에서 출발해, 개발자의 시선으로 완성하는 양유진입니다.{" "}
            </p>
            <p>Front-end Developer & UI/UX Designer</p>
          </div>
        </div>
        <img
          className="profile-image"
          src="../assets/images/profile.webp"
          alt="profileImage"
          fetchpriority="high"
        />
      </div>
    </div>
  );
};

export default Introduction;
