import * as React from 'react';
import cx from 'classnames';

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  OUTLINED,
}

interface Props {
  title: string;
  type: ButtonType;
  large?: boolean;
}

function Button(props: Props) {
  return (
    <button
      className={cx(
        'mr-4 rounded-sm font-bold px-3 py-2 text-sm',
        props.large && 'px-4 py-3 text-base',
        props.type === ButtonType.PRIMARY &&
          'bg-blue-400 hover:bg-blue-300 focus:bg-blue-600 text-blue-900',
        props.type === ButtonType.SECONDARY &&
          'border-blue-600 bg-blue-200 hover:bg-blue-100 focus:bg-blue-300 text-blue-900',
        props.type === ButtonType.OUTLINED &&
          'border-blue-800 border-2 bg-transparent hover:bg-blue-100 focus:bg-blue-200 text-blue-900',
      )}>
      {props.title}
    </button>
  );
}

export { Button };
