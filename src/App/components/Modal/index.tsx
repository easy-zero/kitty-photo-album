import React, { MouseEventHandler, useEffect } from "react";
import Image from "../../constant/image";
import "./Modal.scss";

type Props = {
  type: "dialog" | "image";
  imagePath: string;
  visible: boolean;
  onConfirm: MouseEventHandler;
  onClose: any;
  children: JSX.Element | React.ReactNode;
  confirmTitle: string;
};

export default function Modal(props: Props) {
  const {
    type,
    imagePath,
    visible,
    onConfirm,
    onClose,
    children,
    confirmTitle,
  } = props;

  const srcArr = imagePath.split("/");
  const alt = srcArr[srcArr.length - 1];

  useEffect(() => {
    const closeFunc = (e: any) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", closeFunc);
    return () => window.removeEventListener("keydown", closeFunc);
  }, []);

  const onCloseFunc = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    } else {
      return;
    }
  };

  return (
    <>
      {visible && (
        <div className="BackDrop" onClick={(e) => onCloseFunc(e)}>
          {type === "image" ? (
            <img className="Thumbnail" src={imagePath} alt={alt} />
          ) : (
            <div className="Modal">
              <div className="Contents">{children}</div>
              <div className="Footer" onClick={onConfirm}>
                {confirmTitle}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

Modal.defaultProps = {
  imagePath: Image.sample_image,
  visible: false,
  onConfirm: () => console.log("Confirm"),
  onClose: () => console.log("Close"),
  children: "",
  confirmTitle: "확인",
};
