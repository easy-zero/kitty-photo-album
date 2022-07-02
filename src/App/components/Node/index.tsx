import React from "react";
import { Props, misc } from "../../interfaces/Index";
import Image from "../../constant/image";
import "./Node.scss";

export default function Node(props: Props.NodeProps) {
  const { id, type, name, onClick } = props;

  const icon: misc.NodeIcon = {
    DIRECTORY: Image.directory,
    FILE: Image.file,
  };
  const srcArr = icon[type].split("/");
  const alt = srcArr[srcArr.length - 1];

  return (
    <div className="Node" id={id} onClick={() => onClick(id, name, type)}>
      <img className="Image" src={icon[type]} alt={alt} />
      <div className="Name">{name}</div>
    </div>
  );
}

Node.defaultProps = {
  onClick: (id: string, name: string, type: string) =>
    console.log(
      `Node Click ! - nodeId : ${id}, nodeName : ${name}, nodeType: ${type}`
    ),
};
