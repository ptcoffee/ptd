import * as React from "react";
import cx from "classnames";

interface Props {
  progress: number;
}

export const ProgressBar: React.FC<Props> = props => {
  const { progress } = props;
  return (
    <div className={"w-full h-6 bg-gray-1 shadow"}>
      <div
        className={cx(
          "h-6 bg-primary-4 text-center text-white leading-none",
          "w-3/4",
        )}>
        {progress}
      </div>
    </div>
  );
};
