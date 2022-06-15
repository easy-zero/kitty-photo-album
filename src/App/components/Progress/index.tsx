import React from "react";
import Image from "../../constant/image";
import "./Progress.scss";

type Props = {
  visible: Boolean;
};

export default function Progress({ visible }: Props) {
  return (
    <>
      {visible && (
        <div className="Background">
          <img className="Loading" src={Image.loading} alt="loading" />)
        </div>
      )}
    </>
  );
}
