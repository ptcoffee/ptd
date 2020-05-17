import * as React from "react";
import cx from "classnames";

import * as box from "./box";
import * as home from "./home";

export enum IconName {
  BOX,
  HOME,
}

interface Props {
  name: IconName;
  large?: boolean;
}

const iconMap = {
  [IconName.BOX]: box,
  [IconName.HOME]: home,
};

export const Icon: React.FC<Props> = props => {
  const icon = iconMap[props.name];
  return (
    <img
      alt="icon"
      className={cx("inline mr-2", props.large ? "w-12 h-12" : "w-8 h-8")}
      src={props.large ? icon.large : icon.normal}
    />
  );
};
