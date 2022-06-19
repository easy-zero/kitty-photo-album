import React, { MouseEventHandler } from "react";
import Image from "../../constant/image";
import "./Layout.scss";

type Props = {
  title: string;
  path: string;
  children: JSX.Element | React.ReactNode;
  onPrevClick: MouseEventHandler;
};

export default function Layout(props: Props) {
  const { title, path, children, onPrevClick } = props;

  return (
    <>
      <h1 className="Title">{title}</h1>
      <div className="Container">
        <div className="BreadCrumb">{path}</div>
        <div className="Nodes">
          {path !== "root" && (
            <img
              className="Prev"
              src={Image.prev}
              alt="prev.png"
              onClick={onPrevClick}
            />
          )}
          {children}
        </div>
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "고양이 사진첩",
  path: "root",
  onPrevClick: () => console.log("Prev Click !"),
};
