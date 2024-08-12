import * as React from "react";
import { SVGProps } from "react";
import { ColorValueHex } from "../../../utils/types";
import { adjustBrightness } from "../../../utils/functions";

interface RecordLabelProps extends SVGProps<SVGSVGElement> {
  color?: ColorValueHex;
  text?: string;
}

const Center: React.FC<RecordLabelProps> = ({
  color = "#0071bc",
  text,
  ...props
}) => {
  const colors: {
    base: ColorValueHex;
    light: ColorValueHex;
    bright: ColorValueHex;
  } = {
    base: color,
    light: adjustBrightness(color, 30),
    bright: adjustBrightness(color, 70),
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76 76"
      preserveAspectRatio="none"
      {...props}
    >
      <defs>
        <radialGradient
          id="a"
          cx={194.023}
          cy={103.937}
          r={37.793}
          gradientTransform="matrix(1 0 0 -1 0 208.248)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              transition: 'all 750ms',
              stopColor: colors.light,
            }}
          />
          <stop
            offset={1}
            style={{
              transition: 'all 750ms',
              stopColor: colors.base,
            }}
          />
        </radialGradient>
      </defs>
      <g transform="translate(-155.95 -66.25)">
        <path
          d="M194 66.5c-20.9 0-37.8 16.9-37.8 37.8s16.9 37.8 37.8 37.8 37.8-16.9 37.8-37.8-16.9-37.8-37.8-37.8zm-.5 40.5c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z"
          style={{
            display: "inline",
            fill: "url(#a)",
            stroke: "#000",
            strokeWidth: 0.5,
          }}
        />
        <circle
          cx={194}
          cy={104.3}
          r={34}
          style={{
            display: "inline",
            fill: "none",
            transition: 'all 750ms',
            stroke: colors.bright,
            strokeWidth: 0.5,
          }}
        />
        <path
          d="M193.5 93.9c-5.6 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2 10.2-4.6 10.2-10.2-4.6-10.2-10.2-10.2zm0 13.1c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z"
          style={{
            display: "inline",
            transition: 'all 750ms',
            fill: colors.base,
            stroke: colors.bright,
            strokeWidth: 0.5,
          }}
        />
        
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#00000090"
          fontSize="0.2em"
          transform="translate(155.95 66.25)translate(22.5,0)"
        >
          33½ RPM
        </text>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#00000090"
          fontSize="0.2em"
          transform="translate(155.95 66.25)translate(-22.5,0)"
        >
          Side 1
        </text>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#00000099"
          fontSize="0.3em"
          transform="translate(155.95 66.25)translate(0,-17.5)"
        >
          {text}
        </text>

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#00000099"
          fontSize="0.2em"
          transform="translate(155.95 66.25)translate(0,17.5)"
        >
          Analog Rhythm
        </text>
      </g>
    </svg>
  );
};
export default Center;
