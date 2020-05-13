import React from "react";
import { Color } from "../../core/color";
import { FontFamily, FontSize } from "../../core/font";
import { SpaceSize } from "../../core/size";
import styles from './Button.module.scss';

export enum ButtonStyle {
  Primary,
  Secondary,
  Outlined,
  Minimal_1,
  Minimal_2,
}

interface Props {
  style: ButtonStyle
  title?: string,
  disabled?:any,
  icon?:any,
}

//Có 3 chỗ ảnh hưởng  Button.tsx , index.tsx của checkTailwind và file tailwindcss-PT.js ở root . 
export const Button: React.FC<Props> = (props) => {

  const variant={
    [ButtonStyle.Primary]:'text-base text-gray-9  tracking-normal disabled:text-gray-4 bg-primary-4 hover:bg-primary-3 active:bg-primary-5 disabled:bg-gray-1 border border-primary-5 disabled:border-gray-3 font-sans rounded-lg transition-all',
    [ButtonStyle.Secondary]:'text-base text-gray-9 tracking-normal disabled:text-gray-4  bg-gray-1 hover:bg-gray-0 active:bg-gray-2 disabled:bg-gray-1  border border-gray-4 disabled:border-gray-3 font-sans rounded-lg transition-all',
    [ButtonStyle.Outlined]:' text-base text-gray-8 tracking-normal disabled:text-gray-4 bg-gray-0 hover:bg-gray-3 active:bg-gray-4 disabled:bg-gray-0 border border-gray-4 font-sans rounded-lg transition-all',
    [ButtonStyle.Minimal_1]:'text-base text-gray-8 tracking-normal disabled:bg-transparent hover:bg-gray-3 active:bg-gray-4  disabled:text-gray-4 font-sans rounded-lg transition-all',
    [ButtonStyle.Minimal_2]:'text-base text-primary-10 tracking-normal disabled:text-gray-4 disabled:bg-transparent hover:bg-primary-2 active:bg-primary-3 font-sans rounded-lg transition-all' ,
  }
  
  

  return (
    (props.disabled!=null)?<button disabled className={`w-32 h-10   ${variant[props.style]}`}>{props.title}</button>
                          :<button  className={`w-32 h-10 px-4 py-1 ${variant[props.style]}`}>{props.title}</button>
  );
}





