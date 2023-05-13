import React from "react";
import FirstBox from "../FirstBox/FirstBox";
import SecondBox from "../SecondBox/SecondBox";
import ThirdBox from "../ThirdBox/ThirdBox";
import SchemaBox from "../SchemaBox/SchemaBox";
import ForthBox from "../ForthBox/ForthBox";

function Home() {
  return (
    <div class="myContainer">
      <div class="content">
        <ul class="flex-container">
          <FirstBox />
          <SecondBox />
          <ThirdBox />
            <ForthBox />
            <SchemaBox />
        </ul>
      </div>
    </div>
  );
}

export default Home;
