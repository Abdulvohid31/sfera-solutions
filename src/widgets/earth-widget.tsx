'use client';
import React from 'react';

const EarthWidget: React.FC = () => {
  return (
    <div className="h-[100%] hidden  lg:grid place-items-center ">
      <div className="earth relative lg:w-[600px] aspect-square rounded-full bg-[url('https://i.postimg.cc/9QCCCVsQ/earth.png')] bg-repeat-x bg-cover shadow-[0_-1px_1px_1px_white,-1px_1px_1px_1px_#6b25ff,0_0_var(--pulse)_-20px_#6b25ff,inset_0_0_76px_-10px_#6b25ff,inset_0_0_var(--pulse2)_-10px_#6b25ff] animate-[earth_40s_linear_infinite,pulse_2s_linear_infinite_alternate-reverse]">
        <style jsx>{`
          @property --pulse {
            syntax: '<length>';
            inherits: false;
            initial-value: 80px;
          }

          @property --pulse2 {
            syntax: '<length>';
            inherits: false;
            initial-value: 56px;
          }

          @property --r {
            syntax: '<angle>';
            inherits: false;
            initial-value: 0deg;
          }

          .earth::before,
          .earth::after {
            content: '';
            position: absolute;
            left: 70px;
            height: 10px;
            border-radius: 45%;
            filter: blur(12px);
            transform: rotate(var(--r));
            animation: rotation 10s linear infinite;
          }

          .earth::before {
            width: 14%;
            box-shadow: 
              inset 0 0 70px 90px #A47478, 
              0 0 140px 70px #A47478;
          }

          .earth::after {
            width: 7%;
            height: 10px;
            box-shadow: 
              inset 0 0 70px -50px white, 
              inset 0 0 70px 90px #E5BC77, 
              0 0 130px 50px #E5BC77;
          }

          @keyframes earth {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: -199% 0;
            }
          }

          @keyframes pulse {
            0% {
              --pulse: 8rem;
              --pulse2: 5.6rem;
              --r: 0deg;
            }
            100% {
              --pulse: 10rem;
              --pulse2: 3.6rem;
              --r: 180deg;
            }
          }

          @keyframes rotation {
            from {
              --r: 0deg;
            }
            to {
              --r: 180deg;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default EarthWidget;