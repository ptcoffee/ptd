import * as React from "react";
import cx from "classnames";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  MINIMAL,
}

interface Props {
  title: string;
  type: ButtonType;
  large?: boolean;
  primary?: boolean;
  secondary?: boolean;
  minimal?: boolean;
}

function Button(props: Props) {
  return (
    <button
      className={cx(
        "font-sans mr-4 rounded-sm font-medium px-3 py-2 text-sm box-border",
        props.large && "px-4 py-3 text-base",
        props.primary &&
          "bg-primary-400 hover:bg-primary-300 focus:bg-primary-500 active:bg-primary-500 text-primary-900",
        props.secondary &&
          "border-gray-600 bg-gray-200 hover:bg-gray-100 focus:bg-gray-300 active:bg-gray-300 text-gray-900",
        props.minimal &&
          "bg-transparent hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-200 text-gray-900",
      )}>
      {props.title}
    </button>
  );
}

export { Button };
