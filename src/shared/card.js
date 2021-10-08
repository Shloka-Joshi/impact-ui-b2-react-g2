import React from "react";

export default function BasicCardComponent(props) {
  let a, img;
  if (props.href) {
    a = (
      <a href={props.href} className="btn btn-outline-success">
        {props.btnText}
      </a>
    );
  }
  if (props.imgSrc) {
    img = <img src={props.imgSrc} alt="Image" />;
  }
  return (
    <div className="card text-center">
      <div className="overflow">{img}</div>
      <div className="card-body text-dark">
        <h4 className="class-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.text}</p>
        {a}
      </div>
    </div>
  );
}
