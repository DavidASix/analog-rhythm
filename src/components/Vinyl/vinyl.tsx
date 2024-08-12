import React, { useState } from "react";
import Center from "./sections/Center";
import Base from "./sections/Base";
import Lighting from "./sections/Lighting";
import { ColorValueHex, StyleSize } from "../../utils/types";

import "./styles.css";

interface VinylProps extends React.HTMLProps<HTMLDivElement> {
  color?: ColorValueHex;
  containerSize: StyleSize;
  spinning?: boolean;
  text?: string;
}

const Vinyl: React.FC<VinylProps> = ({
  color = "#0464bb",
  containerSize,
  spinning = false,
  text = 'test',
  ...props
}) => {
  const rootProps = {
    ...props,
    color: undefined,
    containerSize: undefined,
    spinning: undefined,
    text: undefined,
  };
  return (
    <figure
      className="record-container"
      style={{ height: 'auto', width: containerSize, aspectRatio: 1,   borderRadius: '49.5%'}}
      {...rootProps}
    >
      <Base
        style={{ zIndex: 5, position: "absolute", width: containerSize, height: containerSize,}}
        className={`spin ${spinning ? "" : "paused"}`}
      />
      <Center
        text={text}
        color={color}
        style={{
          zIndex: 20,
          position: "absolute",
          width: `calc(${containerSize} / 2.75)`,
          height: `calc(${containerSize} / 2.75)`,
        }}
        className={`spin ${spinning ? "" : "paused"}`}
      />
      <Lighting
        style={{ zIndex: 50, position: "absolute", width: containerSize, height: containerSize }}
      />
    </figure>
  );
};

export default Vinyl;
