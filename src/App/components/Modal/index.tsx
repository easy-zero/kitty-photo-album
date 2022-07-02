import React, { useEffect } from "react";
import { Props } from "../../interfaces";
import Image from "../../constant/image";
import "./Modal.scss";

const IMAGE_BASE_URL =
  "https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public";

export default function Modal(props: Props.ModalProps) {
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
            <img
              className="Thumbnail"
              src={IMAGE_BASE_URL + imagePath}
              alt={alt}
            />
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
