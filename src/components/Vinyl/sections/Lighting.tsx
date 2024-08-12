import React, { SVGProps } from "react"

const Lighting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 0 201 201"
    preserveAspectRatio="none"
    {...props}
  >
    <defs>
      <radialGradient
        id="l1"
        cx={1122.672}
        cy={336.51}
        r={98.153}
        gradientTransform="rotate(45.001 1084.89 -841.37)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0.55}
          style={{
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
      </radialGradient>
      <radialGradient
        id="l2"
        cx={1122.673}
        cy={264.71}
        r={98.153}
        gradientTransform="scale(1 -1) rotate(-45 68.057 1262.552)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0.55}
          style={{
            stopColor: "#000",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
      </radialGradient>
      <linearGradient
        id="l3"
        x1={225.931}
        x2={274.032}
        y1={976.915}
        y2={928.813}
        gradientTransform="translate(587.065 -457.525)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#231f20",
            stopOpacity: 0,
          }}
        />
        <stop
          offset={0.5}
          style={{
            stopColor: "#fff",
            stopOpacity: 0.25,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#231f20",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
    </defs>
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M264.7 33.3c-39.1-39.1-102.4-39.1-141.4 0l141.4 141.4c39.1-39 39.1-102.3 0-141.4z"
        className="st9"
        style={{
          display: "inline",
          fill: "url(#l1)",
        }}
        transform="translate(-93.975 -3.975)"
      />
      <path
        d="M123.3 174.8c-39.1-39.1-39.1-102.4 0-141.4l141.4 141.4c-39 39-102.3 39-141.4 0z"
        className="st10"
        style={{
          display: "inline",
          fill: "url(#l2)",
        }}
        transform="translate(-93.975 -3.975)"
      />
    </g>
    <path
      d="M794.525 404.725c-9.5 4.5-18.3 10.5-26.1 17.8l-4.1 4.1c-7.5 7.9-13.4 16.8-17.8 26.2l133.1 133.1c9.5-4.5 18.3-10.4 26.1-17.8l4.2-4.2c7.5-7.9 13.4-16.8 17.8-26.1zm42 93.3c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z"
      className="st11"
      style={{
        display: "inline",
        fill: "url(#l3)",
      }}
      transform="translate(-737 -395)"
    />
  </svg>
)

export default Lighting
