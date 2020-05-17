import * as React from 'react';

interface Props {
  key?: number;
  steps: [];
  current?: string;
}

export const Stepper: React.FC<Props> = props => {
  const { steps } = props;

  return (
    <div className="flex">
      {steps.map(step => (
        <div className="w-1/4" key={steps.indexOf(step)}>
          <div className="relative mb-2">
            {steps.indexOf(step) ? (
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: 'calc(100% - 2.5rem - 1rem)',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}>
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-blue-300 py-1 rounded"
                    style={{ width: '100%' }}></div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
              <span className="text-center text-white w-full">
                {steps.indexOf(step)}
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">{step}</div>
        </div>
      ))}
    </div>
  );
};
