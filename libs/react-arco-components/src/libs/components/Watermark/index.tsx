import React, { useState, useEffect } from "react";
import waterMarkBase64Url from "../../utils/waterMarkBase64Url";

export type Iocontent = {
  text?: string;
  url?: string;
  isGray?: boolean;
};

interface WatermarkProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  className?: string;
  zIndex?: number;
  watermarkObj: Iocontent;
  alpha?: number;
  rotate?: number;
  children: JSX.Element;
  style?: React.CSSProperties;
}

const Watermark: React.FC<WatermarkProps> = ({
  className,
  x = 200,
  y = 210,
  width = 120,
  height = 60,
  zIndex = 10,
  watermarkObj,
  alpha = 0.3,
  rotate = 23,
  children,
  style = {},
}) => {
  let gapX = x;
  let gapY = y;
  const [base64Url, setBase64Url] = useState("");
  const offsetLeft = gapX / 2;
  const offsetTop = gapY / 2;

  useEffect(() => {
    waterMarkBase64Url(
      {
        width,
        height,
        alpha,
        rotate,
        gapX,
        gapY,
        watermarkObj,
        offsetLeft,
        offsetTop,
      },
      (url) => {
        setBase64Url(url);
      }
    );
  }, [
    width,
    height,
    rotate,
    zIndex,
    alpha,
    offsetLeft,
    offsetTop,
    gapX,
    gapY,
    watermarkObj,
  ]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
      <div
        className={className}
        style={{
          zIndex,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundSize: `${gapX + width}px`,
          pointerEvents: "none",
          backgroundRepeat: "repeat",
          backgroundImage: `url('${base64Url}')`,
          ...style,
        }}
      />
    </div>
  );
};

export default Watermark;
