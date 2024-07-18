import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = " ";
const cssStyle = {};
let imgStyle = {};

if (curDate >= 6 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "white";
  imgStyle.backgroundImage =
    "url('https://img.freepik.com/premium-photo/nature-sunrise-morning-background_345327-5.jpg')";
} else if (curDate >= 12 && curDate < 18) {
  greeting = "Good Afternoon";
  cssStyle.color = "red";
  imgStyle.backgroundImage =
    "url('https://png.pngtree.com/background/20220721/original/pngtree-indulge-in-a-quiet-afternoon-picture-image_1693489.jpg')";
} else if (curDate >= 18 && curDate < 18) {
  greeting = "Good Evening";
  cssStyle.color = "blue";
  imgStyle.backgroundImage =
    "url('https://getwallpapers.com/wallpaper/full/d/b/9/1073877-free-download-sunset-wallpaper-hd-1920x1200-for-ipad-pro.jpg')";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
  imgStyle.backgroundImage =
    "url('https://images3.alphacoders.com/589/589870.jpg')";
}

ReactDOM.render(
  <>
    <div className="container" style={imgStyle}>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}...</span>
      </h1>
      <h3>This side Mukund</h3>
    </div>
  </>,
  document.getElementById("root")
);
