import * as React from 'react';

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

interface Props {
  title: string;
  type: ButtonType;
}

function Button(props: Props) {
  return <button className="px-4 py-5">{props.title}</button>;
}

export { Button };
