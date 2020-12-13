import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbadboyfunkyou%2F&show_text=true&width=552&height=202&appId"
        width="340"
        height="100%"
        style={{border:"none" , overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;

