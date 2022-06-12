import React from "react";
import "../../assets/scss/style.scss";

type Props = {
  title: string;
  path: string;
  children: JSX.Element;
};

export default function Layout(props: Props) {
  return (
    <>
      <h1 className="Title">{props.title}</h1>
      <div className="Container">
        <div className="BreadCrumb">{props.path}</div>
        {props.children}
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "고양이 사진첩",
  path: "root",
};
