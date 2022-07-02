import { MouseEventHandler } from "react";

export interface LayoutProps {
  title: string;
  path: string;
  children: JSX.Element | React.ReactNode;
  onPrevClick: MouseEventHandler;
}

export interface ModalProps {
  type: "dialog" | "image";
  imagePath: string;
  visible: boolean;
  onConfirm: MouseEventHandler;
  onClose: any;
  children: JSX.Element | React.ReactNode;
  confirmTitle: string;
}

export interface NodeProps {
  id: string;
  type: string;
  name: string;
  onClick: Function;
}

export interface ProgressProps {
  visible: Boolean;
}
