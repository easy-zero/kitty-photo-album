import React from "react";
import "../../assets/scss/style.scss";

type Props = {
  icon: string;
  name: string;
};

export default function Node(props: Props) {
  const srcArr = props.icon.split("/");
  const alt = srcArr[srcArr.length - 1];

  return (
    <div className="Nodes">
      <div className="Node">
        <img src={props.icon} alt={alt} />
        <div className="Name">{props.name}</div>
      </div>
    </div>
  );
}
