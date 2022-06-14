import React from "react";
import Image from "../../constant/image";
import "../../assets/scss/style.scss";

type Props = {
  id: string;
  type: string;
  name: string;
  onClick: Function;
};

type Icon = {
  [index: string]: string;
};

export default function Node(props: Props) {
  const { id, type, name, onClick } = props;

  const icon: Icon = {
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
