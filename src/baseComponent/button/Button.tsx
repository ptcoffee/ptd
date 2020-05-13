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
  disabled?: any,
  icon?: string,
}

//Có 3 chỗ ảnh hưởng  Button.tsx , index.tsx của checkTailwind và file tailwindcss-PT.js ở root . 
export const Button: React.FC<Props> = (props) => {

  const variant = {
    [ButtonStyle.Primary]: ' text-base text-gray-9 font-medium tracking-normal disabled:text-gray-4 bg-primary-4 hover:bg-primary-3 active:bg-primary-5 disabled:bg-gray-1 border border-primary-5 disabled:border-gray-3 font-sans rounded-lg transition-all inline-flex items-center justify-center',
    [ButtonStyle.Secondary]: 'text-base text-gray-9 font-medium tracking-normal disabled:text-gray-4  bg-gray-1 hover:bg-gray-0 active:bg-gray-2 disabled:bg-gray-1  border border-gray-4 disabled:border-gray-3 font-sans rounded-lg transition-all inline-flex items-center justify-center',
    [ButtonStyle.Outlined]: ' text-base text-gray-8 font-medium tracking-normal disabled:text-gray-4 bg-gray-0 hover:bg-gray-3 active:bg-gray-4 disabled:bg-gray-0 border border-gray-4 font-sans rounded-lg transition-all inline-flex items-center justify-center',
    [ButtonStyle.Minimal_1]: 'text-base text-gray-8 font-medium tracking-normal disabled:bg-transparent hover:bg-gray-3 active:bg-gray-4  disabled:text-gray-4 font-sans rounded-lg transition-all inline-flex items-center justify-center',
    [ButtonStyle.Minimal_2]: 'text-base text-primary-10 font-medium tracking-normal disabled:text-gray-4 disabled:bg-transparent hover:bg-primary-2 active:bg-primary-3 font-sans rounded-lg transition-all inline-flex items-center justify-center',
  }

  const icons:{[id:string]:JSX.Element} =
  {
    "download": <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>,
    "home":<svg className="inline-block w-4 h-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/>
  </svg>,
    
  }

  return (
    (props.disabled != null)
      ? <button disabled className={`w-32 h-10 ${variant[props.style]}`}>
        {(props.icon != null)
          ? icons[props.icon]
          : null}
        {(props.title != null) ? <span className="ml-2">{props.title}</span> : null}
      </button>

      : <button className={`w-32 h-10 px-4 py-1 ${variant[props.style]}`}>
        {(props.title != null)
          ? (props.icon != null) 
            ?<> {icons[props.icon]}<span className="ml-2">{props.title}</span></>
            : <span>{props.title}</span>
        :(props.icon != null) 
          ? icons[props.icon]
          : null
        }
        </button>
  );
}





