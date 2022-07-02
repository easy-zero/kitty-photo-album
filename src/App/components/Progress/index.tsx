import React from "react";
import { Props } from "../../interfaces/Index";
import Image from "../../constant/image";
import "./Progress.scss";

export default function Progress({ visible }: Props.ProgressProps) {
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
