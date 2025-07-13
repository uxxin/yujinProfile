import React from "react";
import "../assets/style.css";

const AboutMe = () => {
  return (
    <div id="aboutme" className="section-wrapper">
      <h1>About Me</h1>
      <div className="about-me">
        사용자 중심 경험을 만드는 프론트엔드 개발자입니다. 다양한 사이드
        프로젝트를 통해 효율적인 서비스 개발, UI/UX 개선, 팀 협업 경험을
        쌓아왔습니다.
        <br />
        <br />
        새로운 기술 습득에 적극적이며, React, Vue 등 다양한 프레임워크를 활용한
        프로젝트 경험이 있습니다. 도전을 좋아하며 꾸준히 성장 중입니다.
      </div>
    </div>
  );
};

export default AboutMe;
