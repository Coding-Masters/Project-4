import React, { useState, useEffect } from "react";
const Image = (props) => {
  return (
    <div className="image">
      <a target="_blank" href={props.imgLink}>
        <img src={props.imgLink} alt={img.descreption} />
      </a>
    </div>
  );
};
export default Image;
