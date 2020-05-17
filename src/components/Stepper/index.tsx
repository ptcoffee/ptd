import * as React from "react";
import cx from "classnames";

interface Props {
  current?: number;
  className?: string;
  children: React.ReactNode[];
  horizontal?: boolean;
}

export const Stepper: React.FC<Props> = props => {
  return (
    <div>
      <div
        className={cx(
          "flex",
          props.horizontal ? "flex-row" : "flex-col",
          props.className,
        )}>
        {props.children.map((child, index) => [
          <div
            key={index}
            className={cx(
              "flex",
              props.horizontal
                ? "flex-col text-center flex-grow items-center"
                : "flex-row",
            )}>
            <div
              className={cx(
                "flex items-center",
                props.horizontal
                  ? "flex-1 flex-row w-full mb-1"
                  : "flex-col mr-4",
              )}>
              <div
                className={cx(
                  "w-1 bg-gray-3",
                  props.horizontal && "w-full h-1 flex-grow flex-1",
                  // !props.horizontal && "h-1",
                  index <= props.current ? "bg-primary-5" : "bg-gray-3",
                  index === 0 && "opacity-0",
                )}></div>
              <div
                className={cx(
                  "w-6 h-6 rounded-md",
                  props.horizontal && "h-6 w-6 mx-auto",
                  index <= props.current ? "bg-primary-5" : "bg-gray-3",
                )}
              />
              <div
                className={cx(
                  "flex-1 w-1 bg-gray-3 flex-grow",
                  props.horizontal && "w-full h-1",
                  index < props.current ? "bg-primary-5" : "bg-gray-3",
                  index === props.children.length - 1 && "opacity-0",
                )}></div>
            </div>
            <div>{child}</div>
          </div>,
        ])}
      </div>
    </div>
  );
};

// export { Step } from "./Step";
