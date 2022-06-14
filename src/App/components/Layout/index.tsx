import React from "react";
import Image from "../../constant/image";
import "./Layout.scss";

type Props = {
  title: string;
  path: string;
  children: JSX.Element | React.ReactNode;
};

export default function Layout(props: Props) {
  const { title, path, children } = props;

  return (
    <>
      <h1 className="Title">{title}</h1>
      <div className="Container">
        <div className="BreadCrumb">{path}</div>
        <div className="Nodes">
          {path === "root" ? (
            children
          ) : (
            <>
              <img className="Prev" src={Image.prev} alt="prev.png" />
              {children}
            </>
          )}
        </div>
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "고양이 사진첩",
  path: "root",
};
