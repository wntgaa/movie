import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “리엑트를 학습하기위해 온라인 강의를 보며 만들어보았습니다.”
      </span>
      <span>− 2021.11.07 마침 김민섭.</span>
    </div>
  );
}

export default About;