import * as React from "react";
import cx from "classnames";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  OUTLINED,
  MINIMAL,
}

interface Props {
  onClick: () => void;
  title?: string;
  type: ButtonType;
  disabled?: boolean;
  icon?: string;
  large?: boolean;
}

const icons: { [id: string]: JSX.Element } = {
  download: (
    <svg
      className="w-4 h-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
  ),
  home: (
    <svg
      className="inline-block w-4 h-4 text-teal-500 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z" />
    </svg>
  ),
};

export const Button: React.FC<Props> = props => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={cx(
        "h-10 px-4 py-1 text-base font-sans font-medium tracking-normal rounded-sm transition-all inline-flex items-center justify-center",
        props.type === ButtonType.PRIMARY &&
          "mr-4 text-base text-gray-9 disabled:text-gray-4 bg-primary-4 hover:bg-primary-3 active:bg-primary-5 disabled:bg-gray-1 border border-primary-5 disabled:border-gray-3 ",
        props.type === ButtonType.SECONDARY &&
          " mr-4 text-gray-9 disabled:text-gray-4  bg-gray-1 hover:bg-gray-0 active:bg-gray-2 disabled:bg-gray-1  border border-gray-4 disabled:border-gray-3 ",
        props.type === ButtonType.OUTLINED &&
          " mr-4 text-gray-8 disabled:text-gray-4 bg-gray-0 hover:bg-gray-3 active:bg-gray-4 disabled:bg-gray-0 border border-gray-4 ",
        props.type === ButtonType.MINIMAL &&
          "mr-4  h-10  text-gray-8  disabled:bg-transparent hover:bg-gray-3 active:bg-gray-4  disabled:text-gray-4",
      )}>
      {props.title != null ? (
        props.icon != null ? (
          <>
            {" "}
            {icons[props.icon]}
            <span className="ml-2">{props.title}</span>
          </>
        ) : (
          <span>{props.title}</span>
        )
      ) : props.icon != null ? (
        icons[props.icon]
      ) : null}
    </button>
  );
};
